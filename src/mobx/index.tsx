import { types } from 'mobx-state-tree';

// Определение модели для управления пагинацией
const PaginationStore = types
  .model({
    currentPage: types.optional(types.number, 1), // Текущая страница (по умолчанию 1)
    // totalPages: types.optional(types.number, 1)   // Общее количество страниц (по умолчанию 1)
  })
  .actions((self) => ({
    // Метод для перехода к следующей странице
    nextPage() {
      self.currentPage += 1;
    },

    // Метод для перехода к предыдущей странице
    prevPage() {
      if (self.currentPage > 1) {
        self.currentPage -= 1;
      }
    },

    // Метод для установки текущей страницы
    // setCurrentPage(page) {
    //   if (page >= 1 && page <= self.totalPages) {
    //     self.currentPage = page;
    //   }
    // },

    // Метод для установки общего количества страниц
    // setTotalPages(total) {
    //   self.totalPages = total;
    // }
  }));
// .views(self => ({
//   // Геттер для проверки, есть ли следующая страница
//   get hasNextPage() {
//     return self.currentPage < self.totalPages;
//   },

//   // Геттер для проверки, есть ли предыдущая страница
//   get hasPrevPage() {
//     return self.currentPage > 1;
//   }
// }));

// Экспорт модели для использования в приложении
export default PaginationStore;
