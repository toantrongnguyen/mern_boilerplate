import styled from 'styled-components'

export const LetterAvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.colors.gray9};
  background-color: ${({ theme }) => theme.colors.gray15};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.radius.medium};
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
