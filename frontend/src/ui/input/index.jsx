import styled from "styled-components";

export const Input = styled.input`
  margin: 10px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  padding: 0.75em;
  border-radius: 8px;
  border-style: none;
`;

export const InputLabel = styled.label`
  // custom input ui component
  // export const Input = styled.input
`;
//   width: 100%;
//   height: ${({ size = "md" }) => (size === "md" ? 36 : 50)}px;
//   padding: ${({ size = "md" }) => (size === "md" ? "12px 8px" : "16px 12px")};
//   border-radius: 8px;
//   font: ${({ theme, size = "md" }) =>
//     theme.textStyles.desktop[size === "lg" ? "text-t1" : "text-t3"]};
//   background-color: transparent;
//   box-sizing: border-box;
//   line-height: 1;
//   margin: 0px;

//   outline: none;
//   border: 2px solid
//     ${({ error, theme }) =>
//       error ? theme.palette.red : theme.palette["grey-500"]};

//   &:focus {
//     border-color: ${({ error, theme }) =>
//       error ? theme.palette.red : theme.palette.blue};
//     &:hover {
//       background-color: ${({ theme }) => theme.palette["grey-200"]};
//     }
//   }
//   outline-color: ${({ theme }) => theme.palette.blue};
//   &:hover {
//     background-color: ${({ theme }) => theme.palette["grey-200"]};
//   }
//   &::placeholder {
//     color: ${({ theme }) => theme.palette["grey-700"]};
//     user-select: none;
//   }
// `;

// export const InputHeader = styled.label`
//   font: ${({ theme }) => theme.textStyles.desktop["display-h5"]};
//   color: ${({ theme }) => theme.palette["grey-700"]};
//   margin-bottom: 4px;
//   display: block;
//   user-select: none;
// `;

// export const InputGroup = styled.div``;

// export const TextArea = styled.textarea`
//   resize: vertical;
//   width: 100%;
//   min-height: 100px;
//   padding: 12px 8px;
//   border-radius: 8px;
//   font: ${({ theme }) => theme.textStyles.desktop["text-t3"]};
//   background-color: transparent;
//   box-sizing: border-box;
//   line-height: 1;
//   margin: 0px;

//   outline: none;
//   border: 2px solid
//     ${({ error, theme }) =>
//       error ? theme.palette.red : theme.palette["grey-500"]};

//   &:focus {
//     border-color: ${({ error, theme }) =>
//       error ? theme.palette.red : theme.palette.blue};
//     &:hover {
//       background-color: ${({ theme }) => theme.palette["grey-200"]};
//     }
//   }
//   outline-color: ${({ theme }) => theme.palette.blue};
//   &:hover {
//     background-color: ${({ theme }) => theme.palette["grey-200"]};
//   }
//   &::placeholder {
//     color: ${({ theme }) => theme.palette["grey-700"]};
//     user-select: none;
//   }
// `;
