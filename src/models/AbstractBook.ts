export abstract class AbstractBook {
  protected title: string;
  protected year: number;

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }

  getTitle(): string {
    return this.title;
  }

  getYear(): number {
    return this.year;
  }

  abstract getDescription(): string;
}
