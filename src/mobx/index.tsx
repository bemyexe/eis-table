import { types } from 'mobx-state-tree';

const PaginationStore = types
  .model({
    currentPage: types.optional(types.number, 1),
  })
  .actions((self) => ({
    nextPage() {
      self.currentPage += 1;
    },

    // Метод для перехода к предыдущей странице
    prevPage() {
      if (self.currentPage > 1) {
        self.currentPage -= 1;
      }
    },
  }));

// }));

export default PaginationStore;
