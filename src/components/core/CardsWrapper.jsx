import styled from "styled-components";
import { bp } from "../../styles";

/* Example Usage:
 *
 * <CardsWrapper>
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </CardsWrapper>
 */

const CardsWrapper = styled.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));

  @media ${bp.lg} {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
`;

export default CardsWrapper;
