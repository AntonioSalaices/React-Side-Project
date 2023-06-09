import { RenderResult, render } from '@testing-library/react';
import { Footer } from '@Components/Core';

describe('<Footer />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Footer text="text" />);
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});
