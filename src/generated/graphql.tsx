import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  aboutExhibition: Array<Exhibition>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  cvInfo: Array<Info>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  iconSocial: Array<Social>;
  /** The unique identifier */
  id: Scalars['ID'];
  imagesExhibition: Array<Exhibition>;
  imagesInstallation: Array<Installation>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetAboutExhibitionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ExhibitionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitionWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetCvInfoArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<InfoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<InfoWhereInput>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetIconSocialArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<SocialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SocialWhereInput>;
};


/** Asset system model */
export type AssetImagesExhibitionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ExhibitionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitionWhereInput>;
};


/** Asset system model */
export type AssetImagesInstallationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<InstallationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<InstallationWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  aboutExhibition?: Maybe<ExhibitionCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  cvInfo?: Maybe<InfoCreateManyInlineInput>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  iconSocial?: Maybe<SocialCreateManyInlineInput>;
  imagesExhibition?: Maybe<ExhibitionCreateManyInlineInput>;
  imagesInstallation?: Maybe<InstallationCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  aboutExhibition_every?: Maybe<ExhibitionWhereInput>;
  aboutExhibition_none?: Maybe<ExhibitionWhereInput>;
  aboutExhibition_some?: Maybe<ExhibitionWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  cvInfo_every?: Maybe<InfoWhereInput>;
  cvInfo_none?: Maybe<InfoWhereInput>;
  cvInfo_some?: Maybe<InfoWhereInput>;
  iconSocial_every?: Maybe<SocialWhereInput>;
  iconSocial_none?: Maybe<SocialWhereInput>;
  iconSocial_some?: Maybe<SocialWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  imagesExhibition_every?: Maybe<ExhibitionWhereInput>;
  imagesExhibition_none?: Maybe<ExhibitionWhereInput>;
  imagesExhibition_some?: Maybe<ExhibitionWhereInput>;
  imagesInstallation_every?: Maybe<InstallationWhereInput>;
  imagesInstallation_none?: Maybe<InstallationWhereInput>;
  imagesInstallation_some?: Maybe<InstallationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  aboutExhibition?: Maybe<ExhibitionUpdateManyInlineInput>;
  cvInfo?: Maybe<InfoUpdateManyInlineInput>;
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  iconSocial?: Maybe<SocialUpdateManyInlineInput>;
  imagesExhibition?: Maybe<ExhibitionUpdateManyInlineInput>;
  imagesInstallation?: Maybe<InstallationUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  aboutExhibition_every?: Maybe<ExhibitionWhereInput>;
  aboutExhibition_none?: Maybe<ExhibitionWhereInput>;
  aboutExhibition_some?: Maybe<ExhibitionWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  cvInfo_every?: Maybe<InfoWhereInput>;
  cvInfo_none?: Maybe<InfoWhereInput>;
  cvInfo_some?: Maybe<InfoWhereInput>;
  fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  iconSocial_every?: Maybe<SocialWhereInput>;
  iconSocial_none?: Maybe<SocialWhereInput>;
  iconSocial_some?: Maybe<SocialWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  imagesExhibition_every?: Maybe<ExhibitionWhereInput>;
  imagesExhibition_none?: Maybe<ExhibitionWhereInput>;
  imagesExhibition_some?: Maybe<ExhibitionWhereInput>;
  imagesInstallation_every?: Maybe<InstallationWhereInput>;
  imagesInstallation_none?: Maybe<InstallationWhereInput>;
  imagesInstallation_some?: Maybe<InstallationWhereInput>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Exhibition = Node & {
  __typename?: 'Exhibition';
  about?: Maybe<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Exhibition>;
  endDate?: Maybe<Scalars['Date']>;
  galleryName?: Maybe<Scalars['String']>;
  /** List of Exhibition versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images: Array<Asset>;
  /** (city, state or country) */
  location?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  startDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ExhibitionType>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ExhibitionAboutArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ExhibitionCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ExhibitionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ExhibitionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ExhibitionImagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
};


export type ExhibitionPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ExhibitionUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ExhibitionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ExhibitionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ExhibitionConnection = {
  __typename?: 'ExhibitionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ExhibitionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ExhibitionCreateInput = {
  about?: Maybe<AssetCreateOneInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['Date']>;
  galleryName?: Maybe<Scalars['String']>;
  images?: Maybe<AssetCreateManyInlineInput>;
  location?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ExhibitionType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ExhibitionCreateManyInlineInput = {
  /** Connect multiple existing Exhibition documents */
  connect?: Maybe<Array<ExhibitionWhereUniqueInput>>;
  /** Create and connect multiple existing Exhibition documents */
  create?: Maybe<Array<ExhibitionCreateInput>>;
};

export type ExhibitionCreateOneInlineInput = {
  /** Connect one existing Exhibition document */
  connect?: Maybe<ExhibitionWhereUniqueInput>;
  /** Create and connect one Exhibition document */
  create?: Maybe<ExhibitionCreateInput>;
};

/** An edge in a connection. */
export type ExhibitionEdge = {
  __typename?: 'ExhibitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Exhibition;
};

/** Identifies documents */
export type ExhibitionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExhibitionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExhibitionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExhibitionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  about?: Maybe<AssetWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  endDate?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['Date']>>;
  galleryName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  galleryName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  galleryName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  galleryName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  galleryName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  galleryName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  galleryName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  galleryName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  galleryName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  galleryName_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  images_every?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  photographerCredit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  photographerCredit_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  photographerCredit_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  photographerCredit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  photographerCredit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  photographerCredit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  photographerCredit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  photographerCredit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  photographerCredit_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  startDate?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['Date']>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  type?: Maybe<ExhibitionType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<ExhibitionType>>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<ExhibitionType>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<ExhibitionType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ExhibitionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  GalleryNameAsc = 'galleryName_ASC',
  GalleryNameDesc = 'galleryName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PhotographerCreditAsc = 'photographerCredit_ASC',
  PhotographerCreditDesc = 'photographerCredit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum ExhibitionType {
  Group = 'group',
  Solo = 'solo'
}

export type ExhibitionUpdateInput = {
  about?: Maybe<AssetUpdateOneInlineInput>;
  endDate?: Maybe<Scalars['Date']>;
  galleryName?: Maybe<Scalars['String']>;
  images?: Maybe<AssetUpdateManyInlineInput>;
  location?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ExhibitionType>;
};

export type ExhibitionUpdateManyInlineInput = {
  /** Connect multiple existing Exhibition documents */
  connect?: Maybe<Array<ExhibitionConnectInput>>;
  /** Create and connect multiple Exhibition documents */
  create?: Maybe<Array<ExhibitionCreateInput>>;
  /** Delete multiple Exhibition documents */
  delete?: Maybe<Array<ExhibitionWhereUniqueInput>>;
  /** Disconnect multiple Exhibition documents */
  disconnect?: Maybe<Array<ExhibitionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Exhibition documents */
  set?: Maybe<Array<ExhibitionWhereUniqueInput>>;
  /** Update multiple Exhibition documents */
  update?: Maybe<Array<ExhibitionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Exhibition documents */
  upsert?: Maybe<Array<ExhibitionUpsertWithNestedWhereUniqueInput>>;
};

export type ExhibitionUpdateManyInput = {
  endDate?: Maybe<Scalars['Date']>;
  galleryName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ExhibitionType>;
};

export type ExhibitionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ExhibitionUpdateManyInput;
  /** Document search */
  where: ExhibitionWhereInput;
};

export type ExhibitionUpdateOneInlineInput = {
  /** Connect existing Exhibition document */
  connect?: Maybe<ExhibitionWhereUniqueInput>;
  /** Create and connect one Exhibition document */
  create?: Maybe<ExhibitionCreateInput>;
  /** Delete currently connected Exhibition document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Exhibition document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Exhibition document */
  update?: Maybe<ExhibitionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Exhibition document */
  upsert?: Maybe<ExhibitionUpsertWithNestedWhereUniqueInput>;
};

export type ExhibitionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ExhibitionUpdateInput;
  /** Unique document search */
  where: ExhibitionWhereUniqueInput;
};

export type ExhibitionUpsertInput = {
  /** Create document if it didn't exist */
  create: ExhibitionCreateInput;
  /** Update document if it exists */
  update: ExhibitionUpdateInput;
};

export type ExhibitionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ExhibitionUpsertInput;
  /** Unique document search */
  where: ExhibitionWhereUniqueInput;
};

/** Identifies documents */
export type ExhibitionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExhibitionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExhibitionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExhibitionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  about?: Maybe<AssetWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  endDate?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['Date']>>;
  galleryName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  galleryName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  galleryName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  galleryName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  galleryName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  galleryName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  galleryName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  galleryName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  galleryName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  galleryName_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  images_every?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  photographerCredit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  photographerCredit_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  photographerCredit_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  photographerCredit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  photographerCredit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  photographerCredit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  photographerCredit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  photographerCredit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  photographerCredit_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  startDate?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['Date']>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  type?: Maybe<ExhibitionType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<ExhibitionType>>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<ExhibitionType>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<ExhibitionType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Exhibition record uniquely */
export type ExhibitionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export type Info = Node & {
  __typename?: 'Info';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  cv?: Maybe<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Info>;
  /** List of Info versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imprint?: Maybe<RichText>;
  news?: Maybe<RichText>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type InfoCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type InfoCvArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type InfoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type InfoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type InfoPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type InfoUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type InfoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: InfoWhereUniqueInput;
};

/** A connection to a list of items. */
export type InfoConnection = {
  __typename?: 'InfoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<InfoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type InfoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  cv?: Maybe<AssetCreateOneInlineInput>;
  imprint?: Maybe<Scalars['RichTextAST']>;
  news?: Maybe<Scalars['RichTextAST']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InfoCreateManyInlineInput = {
  /** Connect multiple existing Info documents */
  connect?: Maybe<Array<InfoWhereUniqueInput>>;
  /** Create and connect multiple existing Info documents */
  create?: Maybe<Array<InfoCreateInput>>;
};

export type InfoCreateOneInlineInput = {
  /** Connect one existing Info document */
  connect?: Maybe<InfoWhereUniqueInput>;
  /** Create and connect one Info document */
  create?: Maybe<InfoCreateInput>;
};

/** An edge in a connection. */
export type InfoEdge = {
  __typename?: 'InfoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Info;
};

/** Identifies documents */
export type InfoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<InfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<InfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<InfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  cv?: Maybe<AssetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum InfoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type InfoUpdateInput = {
  cv?: Maybe<AssetUpdateOneInlineInput>;
  imprint?: Maybe<Scalars['RichTextAST']>;
  news?: Maybe<Scalars['RichTextAST']>;
};

export type InfoUpdateManyInlineInput = {
  /** Connect multiple existing Info documents */
  connect?: Maybe<Array<InfoConnectInput>>;
  /** Create and connect multiple Info documents */
  create?: Maybe<Array<InfoCreateInput>>;
  /** Delete multiple Info documents */
  delete?: Maybe<Array<InfoWhereUniqueInput>>;
  /** Disconnect multiple Info documents */
  disconnect?: Maybe<Array<InfoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Info documents */
  set?: Maybe<Array<InfoWhereUniqueInput>>;
  /** Update multiple Info documents */
  update?: Maybe<Array<InfoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Info documents */
  upsert?: Maybe<Array<InfoUpsertWithNestedWhereUniqueInput>>;
};

export type InfoUpdateManyInput = {
  imprint?: Maybe<Scalars['RichTextAST']>;
  news?: Maybe<Scalars['RichTextAST']>;
};

export type InfoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: InfoUpdateManyInput;
  /** Document search */
  where: InfoWhereInput;
};

export type InfoUpdateOneInlineInput = {
  /** Connect existing Info document */
  connect?: Maybe<InfoWhereUniqueInput>;
  /** Create and connect one Info document */
  create?: Maybe<InfoCreateInput>;
  /** Delete currently connected Info document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Info document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Info document */
  update?: Maybe<InfoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Info document */
  upsert?: Maybe<InfoUpsertWithNestedWhereUniqueInput>;
};

export type InfoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: InfoUpdateInput;
  /** Unique document search */
  where: InfoWhereUniqueInput;
};

export type InfoUpsertInput = {
  /** Create document if it didn't exist */
  create: InfoCreateInput;
  /** Update document if it exists */
  update: InfoUpdateInput;
};

export type InfoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: InfoUpsertInput;
  /** Unique document search */
  where: InfoWhereUniqueInput;
};

/** Identifies documents */
export type InfoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<InfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<InfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<InfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  cv?: Maybe<AssetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Info record uniquely */
export type InfoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Installation = Node & {
  __typename?: 'Installation';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Installation>;
  /** List of Installation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images: Array<Asset>;
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  year?: Maybe<Scalars['Date']>;
};


export type InstallationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type InstallationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type InstallationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type InstallationImagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
};


export type InstallationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type InstallationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type InstallationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: InstallationWhereUniqueInput;
};

/** A connection to a list of items. */
export type InstallationConnection = {
  __typename?: 'InstallationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<InstallationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type InstallationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<AssetCreateManyInlineInput>;
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Date']>;
};

export type InstallationCreateManyInlineInput = {
  /** Connect multiple existing Installation documents */
  connect?: Maybe<Array<InstallationWhereUniqueInput>>;
  /** Create and connect multiple existing Installation documents */
  create?: Maybe<Array<InstallationCreateInput>>;
};

export type InstallationCreateOneInlineInput = {
  /** Connect one existing Installation document */
  connect?: Maybe<InstallationWhereUniqueInput>;
  /** Create and connect one Installation document */
  create?: Maybe<InstallationCreateInput>;
};

/** An edge in a connection. */
export type InstallationEdge = {
  __typename?: 'InstallationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Installation;
};

/** Identifies documents */
export type InstallationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<InstallationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<InstallationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<InstallationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  images_every?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  materials_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  materials_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  materials_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  materials_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  materials_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  materials_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  materials_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  materials_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  materials_starts_with?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  photographerCredit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  photographerCredit_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  photographerCredit_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  photographerCredit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  photographerCredit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  photographerCredit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  photographerCredit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  photographerCredit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  photographerCredit_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  year?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  year_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  year_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  year_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<Array<Scalars['Date']>>;
};

export enum InstallationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  MaterialsAsc = 'materials_ASC',
  MaterialsDesc = 'materials_DESC',
  PhotographerCreditAsc = 'photographerCredit_ASC',
  PhotographerCreditDesc = 'photographerCredit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

export type InstallationUpdateInput = {
  images?: Maybe<AssetUpdateManyInlineInput>;
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};

export type InstallationUpdateManyInlineInput = {
  /** Connect multiple existing Installation documents */
  connect?: Maybe<Array<InstallationConnectInput>>;
  /** Create and connect multiple Installation documents */
  create?: Maybe<Array<InstallationCreateInput>>;
  /** Delete multiple Installation documents */
  delete?: Maybe<Array<InstallationWhereUniqueInput>>;
  /** Disconnect multiple Installation documents */
  disconnect?: Maybe<Array<InstallationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Installation documents */
  set?: Maybe<Array<InstallationWhereUniqueInput>>;
  /** Update multiple Installation documents */
  update?: Maybe<Array<InstallationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Installation documents */
  upsert?: Maybe<Array<InstallationUpsertWithNestedWhereUniqueInput>>;
};

export type InstallationUpdateManyInput = {
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};

export type InstallationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: InstallationUpdateManyInput;
  /** Document search */
  where: InstallationWhereInput;
};

export type InstallationUpdateOneInlineInput = {
  /** Connect existing Installation document */
  connect?: Maybe<InstallationWhereUniqueInput>;
  /** Create and connect one Installation document */
  create?: Maybe<InstallationCreateInput>;
  /** Delete currently connected Installation document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Installation document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Installation document */
  update?: Maybe<InstallationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Installation document */
  upsert?: Maybe<InstallationUpsertWithNestedWhereUniqueInput>;
};

export type InstallationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: InstallationUpdateInput;
  /** Unique document search */
  where: InstallationWhereUniqueInput;
};

export type InstallationUpsertInput = {
  /** Create document if it didn't exist */
  create: InstallationCreateInput;
  /** Update document if it exists */
  update: InstallationUpdateInput;
};

export type InstallationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: InstallationUpsertInput;
  /** Unique document search */
  where: InstallationWhereUniqueInput;
};

/** Identifies documents */
export type InstallationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<InstallationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<InstallationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<InstallationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  images_every?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  materials_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  materials_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  materials_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  materials_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  materials_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  materials_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  materials_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  materials_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  materials_starts_with?: Maybe<Scalars['String']>;
  photographerCredit?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  photographerCredit_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  photographerCredit_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  photographerCredit_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  photographerCredit_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  photographerCredit_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  photographerCredit_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  photographerCredit_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  photographerCredit_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  photographerCredit_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  year?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  year_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  year_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  year_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<Array<Scalars['Date']>>;
};

/** References Installation record uniquely */
export type InstallationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one exhibition */
  createExhibition?: Maybe<Exhibition>;
  /** Create one info */
  createInfo?: Maybe<Info>;
  /** Create one installation */
  createInstallation?: Maybe<Installation>;
  /** Create one social */
  createSocial?: Maybe<Social>;
  /** Create one video */
  createVideo?: Maybe<Video>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one exhibition from _all_ existing stages. Returns deleted document. */
  deleteExhibition?: Maybe<Exhibition>;
  /** Delete one info from _all_ existing stages. Returns deleted document. */
  deleteInfo?: Maybe<Info>;
  /** Delete one installation from _all_ existing stages. Returns deleted document. */
  deleteInstallation?: Maybe<Installation>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Exhibition documents
   * @deprecated Please use the new paginated many mutation (deleteManyExhibitionsConnection)
   */
  deleteManyExhibitions: BatchPayload;
  /** Delete many Exhibition documents, return deleted documents */
  deleteManyExhibitionsConnection: ExhibitionConnection;
  /**
   * Delete many Info documents
   * @deprecated Please use the new paginated many mutation (deleteManyInfosConnection)
   */
  deleteManyInfos: BatchPayload;
  /** Delete many Info documents, return deleted documents */
  deleteManyInfosConnection: InfoConnection;
  /**
   * Delete many Installation documents
   * @deprecated Please use the new paginated many mutation (deleteManyInstallationsConnection)
   */
  deleteManyInstallations: BatchPayload;
  /** Delete many Installation documents, return deleted documents */
  deleteManyInstallationsConnection: InstallationConnection;
  /**
   * Delete many Social documents
   * @deprecated Please use the new paginated many mutation (deleteManySocialsConnection)
   */
  deleteManySocials: BatchPayload;
  /** Delete many Social documents, return deleted documents */
  deleteManySocialsConnection: SocialConnection;
  /**
   * Delete many Video documents
   * @deprecated Please use the new paginated many mutation (deleteManyVideosConnection)
   */
  deleteManyVideos: BatchPayload;
  /** Delete many Video documents, return deleted documents */
  deleteManyVideosConnection: VideoConnection;
  /** Delete one social from _all_ existing stages. Returns deleted document. */
  deleteSocial?: Maybe<Social>;
  /** Delete one video from _all_ existing stages. Returns deleted document. */
  deleteVideo?: Maybe<Video>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one exhibition */
  publishExhibition?: Maybe<Exhibition>;
  /** Publish one info */
  publishInfo?: Maybe<Info>;
  /** Publish one installation */
  publishInstallation?: Maybe<Installation>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Exhibition documents
   * @deprecated Please use the new paginated many mutation (publishManyExhibitionsConnection)
   */
  publishManyExhibitions: BatchPayload;
  /** Publish many Exhibition documents */
  publishManyExhibitionsConnection: ExhibitionConnection;
  /**
   * Publish many Info documents
   * @deprecated Please use the new paginated many mutation (publishManyInfosConnection)
   */
  publishManyInfos: BatchPayload;
  /** Publish many Info documents */
  publishManyInfosConnection: InfoConnection;
  /**
   * Publish many Installation documents
   * @deprecated Please use the new paginated many mutation (publishManyInstallationsConnection)
   */
  publishManyInstallations: BatchPayload;
  /** Publish many Installation documents */
  publishManyInstallationsConnection: InstallationConnection;
  /**
   * Publish many Social documents
   * @deprecated Please use the new paginated many mutation (publishManySocialsConnection)
   */
  publishManySocials: BatchPayload;
  /** Publish many Social documents */
  publishManySocialsConnection: SocialConnection;
  /**
   * Publish many Video documents
   * @deprecated Please use the new paginated many mutation (publishManyVideosConnection)
   */
  publishManyVideos: BatchPayload;
  /** Publish many Video documents */
  publishManyVideosConnection: VideoConnection;
  /** Publish one social */
  publishSocial?: Maybe<Social>;
  /** Publish one video */
  publishVideo?: Maybe<Video>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one exhibition from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishExhibition?: Maybe<Exhibition>;
  /** Unpublish one info from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishInfo?: Maybe<Info>;
  /** Unpublish one installation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishInstallation?: Maybe<Installation>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Exhibition documents
   * @deprecated Please use the new paginated many mutation (unpublishManyExhibitionsConnection)
   */
  unpublishManyExhibitions: BatchPayload;
  /** Find many Exhibition documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyExhibitionsConnection: ExhibitionConnection;
  /**
   * Unpublish many Info documents
   * @deprecated Please use the new paginated many mutation (unpublishManyInfosConnection)
   */
  unpublishManyInfos: BatchPayload;
  /** Find many Info documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyInfosConnection: InfoConnection;
  /**
   * Unpublish many Installation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyInstallationsConnection)
   */
  unpublishManyInstallations: BatchPayload;
  /** Find many Installation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyInstallationsConnection: InstallationConnection;
  /**
   * Unpublish many Social documents
   * @deprecated Please use the new paginated many mutation (unpublishManySocialsConnection)
   */
  unpublishManySocials: BatchPayload;
  /** Find many Social documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySocialsConnection: SocialConnection;
  /**
   * Unpublish many Video documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVideosConnection)
   */
  unpublishManyVideos: BatchPayload;
  /** Find many Video documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyVideosConnection: VideoConnection;
  /** Unpublish one social from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSocial?: Maybe<Social>;
  /** Unpublish one video from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishVideo?: Maybe<Video>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one exhibition */
  updateExhibition?: Maybe<Exhibition>;
  /** Update one info */
  updateInfo?: Maybe<Info>;
  /** Update one installation */
  updateInstallation?: Maybe<Installation>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many exhibitions
   * @deprecated Please use the new paginated many mutation (updateManyExhibitionsConnection)
   */
  updateManyExhibitions: BatchPayload;
  /** Update many Exhibition documents */
  updateManyExhibitionsConnection: ExhibitionConnection;
  /**
   * Update many infos
   * @deprecated Please use the new paginated many mutation (updateManyInfosConnection)
   */
  updateManyInfos: BatchPayload;
  /** Update many Info documents */
  updateManyInfosConnection: InfoConnection;
  /**
   * Update many installations
   * @deprecated Please use the new paginated many mutation (updateManyInstallationsConnection)
   */
  updateManyInstallations: BatchPayload;
  /** Update many Installation documents */
  updateManyInstallationsConnection: InstallationConnection;
  /**
   * Update many socials
   * @deprecated Please use the new paginated many mutation (updateManySocialsConnection)
   */
  updateManySocials: BatchPayload;
  /** Update many Social documents */
  updateManySocialsConnection: SocialConnection;
  /**
   * Update many videos
   * @deprecated Please use the new paginated many mutation (updateManyVideosConnection)
   */
  updateManyVideos: BatchPayload;
  /** Update many Video documents */
  updateManyVideosConnection: VideoConnection;
  /** Update one social */
  updateSocial?: Maybe<Social>;
  /** Update one video */
  updateVideo?: Maybe<Video>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one exhibition */
  upsertExhibition?: Maybe<Exhibition>;
  /** Upsert one info */
  upsertInfo?: Maybe<Info>;
  /** Upsert one installation */
  upsertInstallation?: Maybe<Installation>;
  /** Upsert one social */
  upsertSocial?: Maybe<Social>;
  /** Upsert one video */
  upsertVideo?: Maybe<Video>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateExhibitionArgs = {
  data: ExhibitionCreateInput;
};


export type MutationCreateInfoArgs = {
  data: InfoCreateInput;
};


export type MutationCreateInstallationArgs = {
  data: InstallationCreateInput;
};


export type MutationCreateSocialArgs = {
  data: SocialCreateInput;
};


export type MutationCreateVideoArgs = {
  data: VideoCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteExhibitionArgs = {
  where: ExhibitionWhereUniqueInput;
};


export type MutationDeleteInfoArgs = {
  where: InfoWhereUniqueInput;
};


export type MutationDeleteInstallationArgs = {
  where: InstallationWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyExhibitionsArgs = {
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationDeleteManyExhibitionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationDeleteManyInfosArgs = {
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationDeleteManyInfosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationDeleteManyInstallationsArgs = {
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationDeleteManyInstallationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationDeleteManySocialsArgs = {
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationDeleteManySocialsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationDeleteManyVideosArgs = {
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationDeleteManyVideosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationDeleteSocialArgs = {
  where: SocialWhereUniqueInput;
};


export type MutationDeleteVideoArgs = {
  where: VideoWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishExhibitionArgs = {
  to?: Array<Stage>;
  where: ExhibitionWhereUniqueInput;
};


export type MutationPublishInfoArgs = {
  to?: Array<Stage>;
  where: InfoWhereUniqueInput;
};


export type MutationPublishInstallationArgs = {
  to?: Array<Stage>;
  where: InstallationWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyExhibitionsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationPublishManyExhibitionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationPublishManyInfosArgs = {
  to?: Array<Stage>;
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationPublishManyInfosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationPublishManyInstallationsArgs = {
  to?: Array<Stage>;
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationPublishManyInstallationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationPublishManySocialsArgs = {
  to?: Array<Stage>;
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationPublishManySocialsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationPublishManyVideosArgs = {
  to?: Array<Stage>;
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationPublishManyVideosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationPublishSocialArgs = {
  to?: Array<Stage>;
  where: SocialWhereUniqueInput;
};


export type MutationPublishVideoArgs = {
  to?: Array<Stage>;
  where: VideoWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishExhibitionArgs = {
  from?: Array<Stage>;
  where: ExhibitionWhereUniqueInput;
};


export type MutationUnpublishInfoArgs = {
  from?: Array<Stage>;
  where: InfoWhereUniqueInput;
};


export type MutationUnpublishInstallationArgs = {
  from?: Array<Stage>;
  where: InstallationWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyExhibitionsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationUnpublishManyExhibitionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationUnpublishManyInfosArgs = {
  from?: Array<Stage>;
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationUnpublishManyInfosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationUnpublishManyInstallationsArgs = {
  from?: Array<Stage>;
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationUnpublishManyInstallationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationUnpublishManySocialsArgs = {
  from?: Array<Stage>;
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationUnpublishManySocialsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationUnpublishManyVideosArgs = {
  from?: Array<Stage>;
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationUnpublishManyVideosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationUnpublishSocialArgs = {
  from?: Array<Stage>;
  where: SocialWhereUniqueInput;
};


export type MutationUnpublishVideoArgs = {
  from?: Array<Stage>;
  where: VideoWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateExhibitionArgs = {
  data: ExhibitionUpdateInput;
  where: ExhibitionWhereUniqueInput;
};


export type MutationUpdateInfoArgs = {
  data: InfoUpdateInput;
  where: InfoWhereUniqueInput;
};


export type MutationUpdateInstallationArgs = {
  data: InstallationUpdateInput;
  where: InstallationWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyExhibitionsArgs = {
  data: ExhibitionUpdateManyInput;
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationUpdateManyExhibitionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ExhibitionUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitionManyWhereInput>;
};


export type MutationUpdateManyInfosArgs = {
  data: InfoUpdateManyInput;
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationUpdateManyInfosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: InfoUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<InfoManyWhereInput>;
};


export type MutationUpdateManyInstallationsArgs = {
  data: InstallationUpdateManyInput;
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationUpdateManyInstallationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: InstallationUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<InstallationManyWhereInput>;
};


export type MutationUpdateManySocialsArgs = {
  data: SocialUpdateManyInput;
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationUpdateManySocialsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: SocialUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationUpdateManyVideosArgs = {
  data: VideoUpdateManyInput;
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationUpdateManyVideosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: VideoUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<VideoManyWhereInput>;
};


export type MutationUpdateSocialArgs = {
  data: SocialUpdateInput;
  where: SocialWhereUniqueInput;
};


export type MutationUpdateVideoArgs = {
  data: VideoUpdateInput;
  where: VideoWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertExhibitionArgs = {
  upsert: ExhibitionUpsertInput;
  where: ExhibitionWhereUniqueInput;
};


export type MutationUpsertInfoArgs = {
  upsert: InfoUpsertInput;
  where: InfoWhereUniqueInput;
};


export type MutationUpsertInstallationArgs = {
  upsert: InstallationUpsertInput;
  where: InstallationWhereUniqueInput;
};


export type MutationUpsertSocialArgs = {
  upsert: SocialUpsertInput;
  where: SocialWhereUniqueInput;
};


export type MutationUpsertVideoArgs = {
  upsert: VideoUpsertInput;
  where: VideoWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single exhibition */
  exhibition?: Maybe<Exhibition>;
  /** Retrieve document version */
  exhibitionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple exhibitions */
  exhibitions: Array<Exhibition>;
  /** Retrieve multiple exhibitions using the Relay connection interface */
  exhibitionsConnection: ExhibitionConnection;
  /** Retrieve a single info */
  info?: Maybe<Info>;
  /** Retrieve document version */
  infoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple infos */
  infos: Array<Info>;
  /** Retrieve multiple infos using the Relay connection interface */
  infosConnection: InfoConnection;
  /** Retrieve a single installation */
  installation?: Maybe<Installation>;
  /** Retrieve document version */
  installationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple installations */
  installations: Array<Installation>;
  /** Retrieve multiple installations using the Relay connection interface */
  installationsConnection: InstallationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single social */
  social?: Maybe<Social>;
  /** Retrieve document version */
  socialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple socials */
  socials: Array<Social>;
  /** Retrieve multiple socials using the Relay connection interface */
  socialsConnection: SocialConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single video */
  video?: Maybe<Video>;
  /** Retrieve document version */
  videoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple videos */
  videos: Array<Video>;
  /** Retrieve multiple videos using the Relay connection interface */
  videosConnection: VideoConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryExhibitionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ExhibitionWhereUniqueInput;
};


export type QueryExhibitionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryExhibitionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ExhibitionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ExhibitionWhereInput>;
};


export type QueryExhibitionsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ExhibitionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ExhibitionWhereInput>;
};


export type QueryInfoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: InfoWhereUniqueInput;
};


export type QueryInfoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryInfosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<InfoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<InfoWhereInput>;
};


export type QueryInfosConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<InfoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<InfoWhereInput>;
};


export type QueryInstallationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: InstallationWhereUniqueInput;
};


export type QueryInstallationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryInstallationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<InstallationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<InstallationWhereInput>;
};


export type QueryInstallationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<InstallationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<InstallationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QuerySocialArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SocialWhereUniqueInput;
};


export type QuerySocialVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySocialsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SocialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SocialWhereInput>;
};


export type QuerySocialsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SocialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SocialWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryVideoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: VideoWhereUniqueInput;
};


export type QueryVideoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryVideosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<VideoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<VideoWhereInput>;
};


export type QueryVideosConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<VideoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<VideoWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type Social = Node & {
  __typename?: 'Social';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Social>;
  /** List of Social versions */
  history: Array<Version>;
  icon?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SocialCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SocialDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SocialHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type SocialIconArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SocialPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SocialUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SocialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SocialWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialConnection = {
  __typename?: 'SocialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SocialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SocialCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<AssetCreateOneInlineInput>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SocialCreateManyInlineInput = {
  /** Connect multiple existing Social documents */
  connect?: Maybe<Array<SocialWhereUniqueInput>>;
  /** Create and connect multiple existing Social documents */
  create?: Maybe<Array<SocialCreateInput>>;
};

export type SocialCreateOneInlineInput = {
  /** Connect one existing Social document */
  connect?: Maybe<SocialWhereUniqueInput>;
  /** Create and connect one Social document */
  create?: Maybe<SocialCreateInput>;
};

/** An edge in a connection. */
export type SocialEdge = {
  __typename?: 'SocialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Social;
};

/** Identifies documents */
export type SocialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SocialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  icon?: Maybe<AssetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum SocialOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SocialUpdateInput = {
  icon?: Maybe<AssetUpdateOneInlineInput>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SocialUpdateManyInlineInput = {
  /** Connect multiple existing Social documents */
  connect?: Maybe<Array<SocialConnectInput>>;
  /** Create and connect multiple Social documents */
  create?: Maybe<Array<SocialCreateInput>>;
  /** Delete multiple Social documents */
  delete?: Maybe<Array<SocialWhereUniqueInput>>;
  /** Disconnect multiple Social documents */
  disconnect?: Maybe<Array<SocialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Social documents */
  set?: Maybe<Array<SocialWhereUniqueInput>>;
  /** Update multiple Social documents */
  update?: Maybe<Array<SocialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Social documents */
  upsert?: Maybe<Array<SocialUpsertWithNestedWhereUniqueInput>>;
};

export type SocialUpdateManyInput = {
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SocialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialUpdateManyInput;
  /** Document search */
  where: SocialWhereInput;
};

export type SocialUpdateOneInlineInput = {
  /** Connect existing Social document */
  connect?: Maybe<SocialWhereUniqueInput>;
  /** Create and connect one Social document */
  create?: Maybe<SocialCreateInput>;
  /** Delete currently connected Social document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Social document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Social document */
  update?: Maybe<SocialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Social document */
  upsert?: Maybe<SocialUpsertWithNestedWhereUniqueInput>;
};

export type SocialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialUpdateInput;
  /** Unique document search */
  where: SocialWhereUniqueInput;
};

export type SocialUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialCreateInput;
  /** Update document if it exists */
  update: SocialUpdateInput;
};

export type SocialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialUpsertInput;
  /** Unique document search */
  where: SocialWhereUniqueInput;
};

/** Identifies documents */
export type SocialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SocialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  icon?: Maybe<AssetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Social record uniquely */
export type SocialWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Video = Node & {
  __typename?: 'Video';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Video>;
  /** List of Video versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};


export type VideoCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type VideoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type VideoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type VideoPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type VideoUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type VideoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: VideoWhereUniqueInput;
};

/** A connection to a list of items. */
export type VideoConnection = {
  __typename?: 'VideoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<VideoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type VideoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};

export type VideoCreateManyInlineInput = {
  /** Connect multiple existing Video documents */
  connect?: Maybe<Array<VideoWhereUniqueInput>>;
  /** Create and connect multiple existing Video documents */
  create?: Maybe<Array<VideoCreateInput>>;
};

export type VideoCreateOneInlineInput = {
  /** Connect one existing Video document */
  connect?: Maybe<VideoWhereUniqueInput>;
  /** Create and connect one Video document */
  create?: Maybe<VideoCreateInput>;
};

/** An edge in a connection. */
export type VideoEdge = {
  __typename?: 'VideoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Video;
};

/** Identifies documents */
export type VideoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<VideoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<VideoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<VideoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  materials_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  materials_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  materials_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  materials_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  materials_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  materials_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  materials_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  materials_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  materials_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  url?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  year_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  year_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  year_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<Array<Scalars['Date']>>;
};

export enum VideoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  MaterialsAsc = 'materials_ASC',
  MaterialsDesc = 'materials_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

export type VideoUpdateInput = {
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};

export type VideoUpdateManyInlineInput = {
  /** Connect multiple existing Video documents */
  connect?: Maybe<Array<VideoConnectInput>>;
  /** Create and connect multiple Video documents */
  create?: Maybe<Array<VideoCreateInput>>;
  /** Delete multiple Video documents */
  delete?: Maybe<Array<VideoWhereUniqueInput>>;
  /** Disconnect multiple Video documents */
  disconnect?: Maybe<Array<VideoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Video documents */
  set?: Maybe<Array<VideoWhereUniqueInput>>;
  /** Update multiple Video documents */
  update?: Maybe<Array<VideoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Video documents */
  upsert?: Maybe<Array<VideoUpsertWithNestedWhereUniqueInput>>;
};

export type VideoUpdateManyInput = {
  location?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};

export type VideoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VideoUpdateManyInput;
  /** Document search */
  where: VideoWhereInput;
};

export type VideoUpdateOneInlineInput = {
  /** Connect existing Video document */
  connect?: Maybe<VideoWhereUniqueInput>;
  /** Create and connect one Video document */
  create?: Maybe<VideoCreateInput>;
  /** Delete currently connected Video document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Video document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Video document */
  update?: Maybe<VideoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Video document */
  upsert?: Maybe<VideoUpsertWithNestedWhereUniqueInput>;
};

export type VideoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VideoUpdateInput;
  /** Unique document search */
  where: VideoWhereUniqueInput;
};

export type VideoUpsertInput = {
  /** Create document if it didn't exist */
  create: VideoCreateInput;
  /** Update document if it exists */
  update: VideoUpdateInput;
};

export type VideoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VideoUpsertInput;
  /** Unique document search */
  where: VideoWhereUniqueInput;
};

/** Identifies documents */
export type VideoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<VideoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<VideoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<VideoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  materials_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  materials_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  materials_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  materials_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  materials_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  materials_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  materials_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  materials_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  materials_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  url?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  year_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  year_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  year_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<Array<Scalars['Date']>>;
};

/** References Video record uniquely */
export type VideoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type ExhibitionsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ExhibitionsQuery = { __typename?: 'Query', exhibition?: Maybe<{ __typename?: 'Exhibition', title?: Maybe<string>, startDate?: Maybe<any>, endDate?: Maybe<any>, type?: Maybe<ExhibitionType>, galleryName?: Maybe<string>, location?: Maybe<string>, photographerCredit?: Maybe<string>, images: Array<{ __typename?: 'Asset', id: string, url: string }>, about?: Maybe<{ __typename?: 'Asset', url: string }> }> };

export type ExhibitionListQueryVariables = Exact<{ [key: string]: never; }>;


export type ExhibitionListQuery = { __typename?: 'Query', exhibitions: Array<{ __typename?: 'Exhibition', id: string }> };

export type InfoListQueryVariables = Exact<{ [key: string]: never; }>;


export type InfoListQuery = { __typename?: 'Query', infos: Array<{ __typename?: 'Info', id: string, cv?: Maybe<{ __typename?: 'Asset', id: string, url: string }>, news?: Maybe<{ __typename?: 'RichText', html: string }>, imprint?: Maybe<{ __typename?: 'RichText', html: string }> }> };

export type InstallationsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InstallationsQuery = { __typename?: 'Query', installation?: Maybe<{ __typename?: 'Installation', title?: Maybe<string>, materials?: Maybe<string>, location?: Maybe<string>, year?: Maybe<any>, photographerCredit?: Maybe<string>, images: Array<{ __typename?: 'Asset', id: string, url: string }> }> };

export type InstallationsListQueryVariables = Exact<{ [key: string]: never; }>;


export type InstallationsListQuery = { __typename?: 'Query', installations: Array<{ __typename?: 'Installation', id: string }> };

export type SidebarQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarQuery = { __typename?: 'Query', exhibitions: Array<{ __typename?: 'Exhibition', id: string, title?: Maybe<string> }>, installations: Array<{ __typename?: 'Installation', id: string, title?: Maybe<string> }>, videos: Array<{ __typename?: 'Video', id: string, title?: Maybe<string> }>, infos: Array<{ __typename?: 'Info', id: string, cv?: Maybe<{ __typename?: 'Asset', id: string }>, news?: Maybe<{ __typename: 'RichText' }>, imprint?: Maybe<{ __typename: 'RichText' }> }> };

export type VideosQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VideosQuery = { __typename?: 'Query', video?: Maybe<{ __typename?: 'Video', title?: Maybe<string>, materials?: Maybe<string>, location?: Maybe<string>, year?: Maybe<any>, url?: Maybe<string> }> };

export type VideoListQueryVariables = Exact<{ [key: string]: never; }>;


export type VideoListQuery = { __typename?: 'Query', videos: Array<{ __typename?: 'Video', id: string }> };


export const ExhibitionsDocument = gql`
    query Exhibitions($id: ID!) {
  exhibition(where: {id: $id}) {
    title
    startDate
    endDate
    type
    galleryName
    location
    images {
      id
      url
    }
    about {
      url
    }
    photographerCredit
  }
}
    `;

/**
 * __useExhibitionsQuery__
 *
 * To run a query within a React component, call `useExhibitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExhibitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExhibitionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useExhibitionsQuery(baseOptions: Apollo.QueryHookOptions<ExhibitionsQuery, ExhibitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExhibitionsQuery, ExhibitionsQueryVariables>(ExhibitionsDocument, options);
      }
export function useExhibitionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExhibitionsQuery, ExhibitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExhibitionsQuery, ExhibitionsQueryVariables>(ExhibitionsDocument, options);
        }
export type ExhibitionsQueryHookResult = ReturnType<typeof useExhibitionsQuery>;
export type ExhibitionsLazyQueryHookResult = ReturnType<typeof useExhibitionsLazyQuery>;
export type ExhibitionsQueryResult = Apollo.QueryResult<ExhibitionsQuery, ExhibitionsQueryVariables>;
export const ExhibitionListDocument = gql`
    query ExhibitionList {
  exhibitions: exhibitions(orderBy: startDate_DESC) {
    id
  }
}
    `;

/**
 * __useExhibitionListQuery__
 *
 * To run a query within a React component, call `useExhibitionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useExhibitionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExhibitionListQuery({
 *   variables: {
 *   },
 * });
 */
export function useExhibitionListQuery(baseOptions?: Apollo.QueryHookOptions<ExhibitionListQuery, ExhibitionListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExhibitionListQuery, ExhibitionListQueryVariables>(ExhibitionListDocument, options);
      }
export function useExhibitionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExhibitionListQuery, ExhibitionListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExhibitionListQuery, ExhibitionListQueryVariables>(ExhibitionListDocument, options);
        }
export type ExhibitionListQueryHookResult = ReturnType<typeof useExhibitionListQuery>;
export type ExhibitionListLazyQueryHookResult = ReturnType<typeof useExhibitionListLazyQuery>;
export type ExhibitionListQueryResult = Apollo.QueryResult<ExhibitionListQuery, ExhibitionListQueryVariables>;
export const InfoListDocument = gql`
    query InfoList {
  infos {
    id
    cv {
      id
      url
    }
    news {
      html
    }
    imprint {
      html
    }
  }
}
    `;

/**
 * __useInfoListQuery__
 *
 * To run a query within a React component, call `useInfoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useInfoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInfoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useInfoListQuery(baseOptions?: Apollo.QueryHookOptions<InfoListQuery, InfoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InfoListQuery, InfoListQueryVariables>(InfoListDocument, options);
      }
export function useInfoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InfoListQuery, InfoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InfoListQuery, InfoListQueryVariables>(InfoListDocument, options);
        }
export type InfoListQueryHookResult = ReturnType<typeof useInfoListQuery>;
export type InfoListLazyQueryHookResult = ReturnType<typeof useInfoListLazyQuery>;
export type InfoListQueryResult = Apollo.QueryResult<InfoListQuery, InfoListQueryVariables>;
export const InstallationsDocument = gql`
    query Installations($id: ID!) {
  installation(where: {id: $id}) {
    title
    materials
    location
    year
    images {
      id
      url
    }
    photographerCredit
  }
}
    `;

/**
 * __useInstallationsQuery__
 *
 * To run a query within a React component, call `useInstallationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstallationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstallationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInstallationsQuery(baseOptions: Apollo.QueryHookOptions<InstallationsQuery, InstallationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstallationsQuery, InstallationsQueryVariables>(InstallationsDocument, options);
      }
export function useInstallationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstallationsQuery, InstallationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstallationsQuery, InstallationsQueryVariables>(InstallationsDocument, options);
        }
export type InstallationsQueryHookResult = ReturnType<typeof useInstallationsQuery>;
export type InstallationsLazyQueryHookResult = ReturnType<typeof useInstallationsLazyQuery>;
export type InstallationsQueryResult = Apollo.QueryResult<InstallationsQuery, InstallationsQueryVariables>;
export const InstallationsListDocument = gql`
    query InstallationsList {
  installations(orderBy: year_DESC) {
    id
  }
}
    `;

/**
 * __useInstallationsListQuery__
 *
 * To run a query within a React component, call `useInstallationsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstallationsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstallationsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstallationsListQuery(baseOptions?: Apollo.QueryHookOptions<InstallationsListQuery, InstallationsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstallationsListQuery, InstallationsListQueryVariables>(InstallationsListDocument, options);
      }
export function useInstallationsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstallationsListQuery, InstallationsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstallationsListQuery, InstallationsListQueryVariables>(InstallationsListDocument, options);
        }
export type InstallationsListQueryHookResult = ReturnType<typeof useInstallationsListQuery>;
export type InstallationsListLazyQueryHookResult = ReturnType<typeof useInstallationsListLazyQuery>;
export type InstallationsListQueryResult = Apollo.QueryResult<InstallationsListQuery, InstallationsListQueryVariables>;
export const SidebarDocument = gql`
    query Sidebar {
  exhibitions(orderBy: startDate_DESC) {
    id
    title
  }
  installations(orderBy: year_DESC) {
    id
    title
  }
  videos {
    id
    title
  }
  infos {
    id
    cv {
      id
    }
    news {
      __typename
    }
    imprint {
      __typename
    }
  }
}
    `;

/**
 * __useSidebarQuery__
 *
 * To run a query within a React component, call `useSidebarQuery` and pass it any options that fit your needs.
 * When your component renders, `useSidebarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidebarQuery({
 *   variables: {
 *   },
 * });
 */
export function useSidebarQuery(baseOptions?: Apollo.QueryHookOptions<SidebarQuery, SidebarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SidebarQuery, SidebarQueryVariables>(SidebarDocument, options);
      }
export function useSidebarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SidebarQuery, SidebarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SidebarQuery, SidebarQueryVariables>(SidebarDocument, options);
        }
export type SidebarQueryHookResult = ReturnType<typeof useSidebarQuery>;
export type SidebarLazyQueryHookResult = ReturnType<typeof useSidebarLazyQuery>;
export type SidebarQueryResult = Apollo.QueryResult<SidebarQuery, SidebarQueryVariables>;
export const VideosDocument = gql`
    query Videos($id: ID!) {
  video(where: {id: $id}) {
    title
    materials
    location
    year
    url
  }
}
    `;

/**
 * __useVideosQuery__
 *
 * To run a query within a React component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVideosQuery(baseOptions: Apollo.QueryHookOptions<VideosQuery, VideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
      }
export function useVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosQuery, VideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
        }
export type VideosQueryHookResult = ReturnType<typeof useVideosQuery>;
export type VideosLazyQueryHookResult = ReturnType<typeof useVideosLazyQuery>;
export type VideosQueryResult = Apollo.QueryResult<VideosQuery, VideosQueryVariables>;
export const VideoListDocument = gql`
    query VideoList {
  videos {
    id
  }
}
    `;

/**
 * __useVideoListQuery__
 *
 * To run a query within a React component, call `useVideoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useVideoListQuery(baseOptions?: Apollo.QueryHookOptions<VideoListQuery, VideoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideoListQuery, VideoListQueryVariables>(VideoListDocument, options);
      }
export function useVideoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoListQuery, VideoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideoListQuery, VideoListQueryVariables>(VideoListDocument, options);
        }
export type VideoListQueryHookResult = ReturnType<typeof useVideoListQuery>;
export type VideoListLazyQueryHookResult = ReturnType<typeof useVideoListLazyQuery>;
export type VideoListQueryResult = Apollo.QueryResult<VideoListQuery, VideoListQueryVariables>;