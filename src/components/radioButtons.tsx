import React, { CSSProperties, useState } from "react";

interface Props {
   titles: string[];
   styles?: {
      active?: {
         color?: string;
         backgroundColor?: string;
         borderColor?: string;
      };
      nonActive?: {
         color?: string;
         backgroundColor?: string;
         borderColor?: string;
      };
      commonStyles?: {
         fontSize?: string;
         fontWeight?: number;
         padding?: string;
         borderRadius?: string;
         borderWidth?: string;
         borderStyles?: string;
         cursor?: string;
      };
      parentBlock?: {
         gap?: string;
      };
   };
   onClick?: any
}
interface customCSSprops {
   [key: string]: CSSProperties;
}

const RadioButtons = ({ titles, styles, onClick }: Props) => {
   const [changeButton, setChangeButton] = useState("");

   const classes: customCSSprops = {
      active: {
         color: styles?.active?.color ? styles?.active?.color : "#494949",
         backgroundColor: styles?.active?.backgroundColor
            ? styles.active.backgroundColor
            : "white",
         borderColor: styles?.active?.borderColor
            ? styles?.active?.borderColor
            : "white !important",
      },
      nonActive: {
         color: styles?.nonActive?.color ? styles?.nonActive?.color : "white",
         backgroundColor: styles?.nonActive?.backgroundColor
            ? styles?.nonActive?.backgroundColor
            : "initial",
         borderColor: styles?.nonActive?.borderColor
            ? styles.nonActive.borderColor
            : "white",
      },
      commonStyle: {
         fontSize: styles?.commonStyles?.fontSize ? styles?.commonStyles?.fontSize : "20px",
         fontFamily: "Tahoma",
         fontWeight: styles?.commonStyles?.fontWeight ? styles?.commonStyles?.fontWeight : 600,
         boxSizing: "border-box",
         width: "fit-content",
         borderRadius: styles?.commonStyles?.borderRadius ? styles?.commonStyles?.borderRadius : "8px",
         padding: styles?.commonStyles?.padding ? styles?.commonStyles?.padding : "5px",
         borderWidth: styles?.commonStyles?.borderWidth ? styles?.commonStyles?.borderWidth : "2px",
         borderStyle: styles?.commonStyles?.borderStyles ? styles?.commonStyles?.borderStyles : "solid",
         cursor: styles?.commonStyles?.cursor ? styles?.commonStyles?.cursor : "pointer",
      },
      parentBlock: {
         display: "flex",
         gap: styles?.parentBlock?.gap ? styles?.parentBlock?.gap : "5px",
      },
   };



   return (
      <div style={classes.parentBlock}>
         {titles.map((item: string) => (
            <div
               onClick={() => {
                  setChangeButton(item)
                  onClick(item);
               }}
               className={item === changeButton ? "active" : "not-active"}
               style={{
                  ...(item === changeButton
                     ? classes.active
                     : classes.nonActive),
                  ...classes.commonStyle,
               }}
            >
               {item}
            </div>
         ))}
      </div>
   );
};

export default RadioButtons;
