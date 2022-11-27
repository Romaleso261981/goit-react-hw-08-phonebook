import { ErrorTitle } from './NotFoundStyled';
export const NotFound = () => {
  return (
    <ErrorTitle>
      <span>This page is not found</span>
      <br />
      <span>Error 404</span>
      <br />
      <span>Please go to the home page</span>
    </ErrorTitle>
  );
};
export default NotFound;