import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IRecentContactsWebPartProps } from "../RecentContactsWebPart";
import { DisplayMode } from '@microsoft/sp-core-library';

export interface IRecentContactsProps extends IRecentContactsWebPartProps {
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
  context: WebPartContext;
}
