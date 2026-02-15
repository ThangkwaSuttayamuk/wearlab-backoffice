export const useViewModel = () => {
  const handleAlphanumericInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): string => {
    const value = event.target.value;
    const filtered = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    return filtered;
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const char = event.key;
    if (!/^[a-zA-Z0-9]$/.test(char)) {
      event.preventDefault();
    }
  };

  return {
    handleAlphanumericInput,
    handleKeyPress,
  };
};
