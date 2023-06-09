import { RenderResult, render } from '@testing-library/react';
import { Container } from '@Components/Core';

describe('<Container />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Container>
        <span>Children</span>
      </Container>
    );
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});
