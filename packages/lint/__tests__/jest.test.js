test('it should call',
  () => {
    const mockFn = jest.fn();
    console.log(3423452);
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
