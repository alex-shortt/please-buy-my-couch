type StorageGetSet = {
  get: () => any;
  set: (value: string | null) => void;
};

const registerStorageGetSet = (name: string) => {
  return {
    get: () => localStorage.getItem(name),
    set: (value: string | null) => {
      if (value === null) {
        localStorage.removeItem(name);
      } else {
        localStorage.setItem(name, value);
      }
    },
  };
};

export const storage: { [key: string]: StorageGetSet } = {
  userId: registerStorageGetSet("logic-map-user-id"),
  inspect: registerStorageGetSet("logic-map-inspect"),
};
