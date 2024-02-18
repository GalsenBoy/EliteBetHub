// import React from "react";

// type ButtonType = {
//   content?: string | number;
//   onClick?: () => void;
//   children?: React.ReactNode;
//   additionalClass?: string;
//   type?: "submit" | "button" | undefined;
//   disable?: true | undefined;
// };

// export default function Button({
//   content,
//   children,
//   additionalClass,
//   onClick,
//   disable,
//   type,
// }: ButtonType) {
//   return (
//     <button
//       disabled={disable}
//       type={type}
//       onClick={onClick}
//       className={`px-4 py-2 rounded-lg ${additionalClass}`}
//     >
//       {content ? content : children}
//     </button>
//   );
// }
