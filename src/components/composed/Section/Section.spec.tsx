import { render, RenderResult } from '@testing-library/react';
import { Section } from '@Components/Core';

describe('<Section />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Section />);
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});
