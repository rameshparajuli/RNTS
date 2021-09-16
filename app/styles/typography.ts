import { TextType } from '~/components/common/Text/Text.d';
import { ITheme } from '~/theme/theme.d';

const fontWeightRegular = 'normal';
const fontWeightBold = 'bold';

export interface ITypographyStylesObject {
  fontSize?: number;
  textAlign?: string;
  lineHeight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  fontWeight?: string;
}

type TypographyStylesObjectFunction = (
  theme: ITheme,
  bold: boolean,
) => ITypographyStylesObject;

type StyleOptions = TypographyStylesObjectFunction | ITypographyStylesObject;

export interface ITypographyStyles {
  [styleKey: string]: StyleOptions;
}

export const typographyStyles: ITypographyStyles = {
  [TextType.HEADING]: (theme: ITheme, bold: boolean) => ({
    color: theme.text.active,
    fontSize: 32,
    lineHeight: 40,
    fontStyle: 'normal',
    fontWeight: bold ? fontWeightBold : fontWeightRegular,
  }),
  [TextType.SUB_HEADING]: (theme: ITheme, bold: boolean) => ({
    color: theme.text.active,
    fontSize: 18,
    lineHeight: 22,
    fontStyle: 'normal',
    fontWeight: bold ? fontWeightBold : fontWeightRegular,
  }),
  [TextType.BODY]: (theme: ITheme, bold: boolean) => ({
    color: theme.text.active,
    fontSize: 16,
    lineHeight: bold ? 19 : 16,
    fontStyle: 'normal',
    fontWeight: bold ? fontWeightBold : fontWeightRegular,
  }),
  [TextType.PARAGRAPH]: (theme: ITheme, bold: boolean) => ({
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22,
    // update color from figma
    color: theme.text.active,
    fontWeight: bold ? fontWeightBold : fontWeightRegular,
  }),
  [TextType.MD]: (_theme: ITheme, bold: boolean) => ({
    fontSize: 14,
    lineHeight: bold ? 14 : 17,
    fontWeight: bold ? fontWeightBold : fontWeightRegular,
    color: '#000000',
  }),
  [TextType.SM]: (theme: ITheme, bold: boolean) => ({
    fontSize: 12,
    fontWeight: bold ? fontWeightBold : fontWeightRegular,
    color: theme.text.active,
  }),
  [TextType.LABEL]: (theme: ITheme, bold: boolean) => ({
    color: theme.field.nameActive,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: bold ? fontWeightBold : fontWeightRegular,
  }),
  [TextType.BUTTON]: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 19,
    paddingTop: 2,
    paddingBottom: 1,
    fontWeight: '600',
  },
  [TextType.BUTTON_SMALL]: {
    fontSize: 12,
    textAlign: 'center',
  },
  [TextType.INPUT]: {
    fontSize: 15,
  },
};
