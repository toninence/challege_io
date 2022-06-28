import { fireEvent, prettyDOM, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Favorites from "./index";

const favoritesText = {
    add: "Agregar a Favoritos",
    remove: 'Quitar de Favoritos'
}
beforeEach(()=>{
    // const component = render(<Favorites />);
})
describe("prueba del boton favoritos", () => {
  test("Renders favorites button component", () => {
    const component = render(<Favorites />);

    // console.log(component);

    component.getByText("Agregar a Favoritos");
    expect(component.container).toHaveTextContent(favoritesText.add)
    // const button = component.container.querySelector('button');
    // console.log(prettyDOM(button));
  });

  test("Texto del boton. Eliminar de favoritos", () => {
    const component = render(<Favorites isFavorite={true} />);
    component.getByText(favoritesText.remove)
  });

  test("Texto del boton. Agregar a Favoritos", () => {
    const component = render(<Favorites isFavorite={false} />);
    component.getByText(favoritesText.add)
  });

  test('click the button', ()=>{
    const mockHandler = jest.fn()
    const component = render(<Favorites toggleFavorites={mockHandler}/>);
    const button = component.getByText(favoritesText.add);
    fireEvent.click(button)

    expect(mockHandler).toHaveBeenCalledTimes(1);

  })
});
