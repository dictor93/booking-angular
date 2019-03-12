import { BookedFilterPipe } from './booked-filter.pipe';

describe('BookedFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookedFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
