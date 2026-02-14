import { ChangeEvent } from "react";
import { create } from "zustand";
import { supabase } from "../../service/supabase/supabaseCilent";

const useImageStore = create<{
  uploading: boolean;
  fileURLs: string[];
  setUploading: (uploading: boolean) => void;
  setFileURLs: (fileURLs: string[]) => void;
  onHandleFileChange: (
    event: ChangeEvent<HTMLInputElement>,
    func: (paths: string[]) => void
  ) => void;
  onHandleDelete: (filePath: string, func: (paths: string[]) => void) => void;
}>((set, get) => ({
  uploading: false,
  fileURLs: [],
  setUploading: (payload) => {
    set({ uploading: payload });
  },
  setFileURLs: (payload) => {
    set({ fileURLs: payload });
  },
  onHandleFileChange: async (e, func) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) {
      alert("Please select files to upload.");
      return;
    }

    set({ uploading: true });

    const uploadedURLs: string[] = [];
    const existingURLs = get().fileURLs;
    console.log("existingURLs",existingURLs)

    try {
      for (const file of Array.from(selectedFiles)) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()
          .toString(36)
          .substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error } = await supabase.storage
          .from("product")
          .upload(filePath, file);

        if (error) throw error;

        const { publicUrl } = supabase.storage
          .from("product")
          .getPublicUrl(filePath).data;

        if (
          !existingURLs.includes(publicUrl) &&
          !uploadedURLs.includes(publicUrl)
        ) {
          uploadedURLs.push(publicUrl);
        }
      }

      const updatedURLs = [...existingURLs, ...uploadedURLs];
      set({ fileURLs: updatedURLs });
      func(updatedURLs);
    
      alert("Images uploaded successfully.");
    } catch (error: any) {
      alert(`Upload failed: ${error.message || error}`);
    } finally {
      set({ uploading: false });
      e.target.value = "";
    }
  },
  onHandleDelete: async (payload,func) => {
    try {
      const { error } = await supabase.storage
        .from("product")
        .remove([payload]);

      if (error) {
        throw error;
      }

      const currentURLs = get().fileURLs;

      const updatedURLs = currentURLs.filter((url) => !url.includes(payload));

      set({ fileURLs: updatedURLs });
      func(updatedURLs);

      alert("File deleted successfully.");
    } catch (error: any) {
      alert(`Error deleting file: ${error.message || error}`);
    }
  },
}));

export default useImageStore;
