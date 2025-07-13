import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): string {
    if (!copy.isCopyAvailable()) {
      return `Copy of "${copy.getBook().getTitle()}" is not available`;
    }

    copy.setAvailable(false);
    reader.borrowCopy(copy);
    return `Copy of "${copy
      .getBook()
      .getTitle()}" successfully borrowed by ${reader.getName()}`;
  }

  returnBook(reader: Reader, copy: Copy): string {
    const borrowedCopies = reader.getBorrowedCopies();
    if (!borrowedCopies.includes(copy)) {
      return `${reader.getName()} does not have this copy`;
    }

    copy.setAvailable(true);
    reader.returnCopy(copy);
    return `Copy of "${copy
      .getBook()
      .getTitle()}" successfully returned by ${reader.getName()}`;
  }
}
