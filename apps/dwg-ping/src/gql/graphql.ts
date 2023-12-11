/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Big number integer */
  BigInt: { input: any; output: any; }
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: { input: any; output: any; }
};

export type AddVideoViewResult = {
  __typename?: 'AddVideoViewResult';
  added: Scalars['Boolean']['output'];
  videoId: Scalars['String']['output'];
  viewId: Scalars['String']['output'];
  viewsNum: Scalars['Int']['output'];
};

export type App = {
  __typename?: 'App';
  appChannels: Array<Channel>;
  appVideos: Array<Video>;
  authKey?: Maybe<Scalars['String']['output']>;
  bigIcon?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Runtime entity identifier (EntityId) */
  id: Scalars['String']['output'];
  mediumIcon?: Maybe<Scalars['String']['output']>;
  /** The name of the App */
  name: Scalars['String']['output'];
  /** Tagline of the app */
  oneLiner?: Maybe<Scalars['String']['output']>;
  /** Member owning the App */
  ownerMember: Membership;
  /** List of platforms on which the app will be available, e.g. [mobile, web, native] */
  platforms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  smallIcon?: Maybe<Scalars['String']['output']>;
  termsOfService?: Maybe<Scalars['String']['output']>;
  /** Url to the app */
  useUri?: Maybe<Scalars['String']['output']>;
  /** Url where user can read more about the project or company for this app */
  websiteUrl?: Maybe<Scalars['String']['output']>;
};


export type AppAppChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>;
  where?: InputMaybe<ChannelWhereInput>;
};


export type AppAppVideosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoOrderByInput>>;
  where?: InputMaybe<VideoWhereInput>;
};

export enum AppActionActionType {
  CreateChannel = 'CREATE_CHANNEL',
  CreateVideo = 'CREATE_VIDEO'
}

export type AppEdge = {
  __typename?: 'AppEdge';
  cursor: Scalars['String']['output'];
  node: App;
};

export enum AppOrderByInput {
  AuthKeyAsc = 'authKey_ASC',
  AuthKeyDesc = 'authKey_DESC',
  BigIconAsc = 'bigIcon_ASC',
  BigIconDesc = 'bigIcon_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MediumIconAsc = 'mediumIcon_ASC',
  MediumIconDesc = 'mediumIcon_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OneLinerAsc = 'oneLiner_ASC',
  OneLinerDesc = 'oneLiner_DESC',
  OwnerMemberControllerAccountAsc = 'ownerMember_controllerAccount_ASC',
  OwnerMemberControllerAccountDesc = 'ownerMember_controllerAccount_DESC',
  OwnerMemberCreatedAtAsc = 'ownerMember_createdAt_ASC',
  OwnerMemberCreatedAtDesc = 'ownerMember_createdAt_DESC',
  OwnerMemberHandleAsc = 'ownerMember_handle_ASC',
  OwnerMemberHandleDesc = 'ownerMember_handle_DESC',
  OwnerMemberIdAsc = 'ownerMember_id_ASC',
  OwnerMemberIdDesc = 'ownerMember_id_DESC',
  OwnerMemberTotalChannelsCreatedAsc = 'ownerMember_totalChannelsCreated_ASC',
  OwnerMemberTotalChannelsCreatedDesc = 'ownerMember_totalChannelsCreated_DESC',
  SmallIconAsc = 'smallIcon_ASC',
  SmallIconDesc = 'smallIcon_DESC',
  TermsOfServiceAsc = 'termsOfService_ASC',
  TermsOfServiceDesc = 'termsOfService_DESC',
  UseUriAsc = 'useUri_ASC',
  UseUriDesc = 'useUri_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC'
}

export type AppWhereInput = {
  AND?: InputMaybe<Array<AppWhereInput>>;
  OR?: InputMaybe<Array<AppWhereInput>>;
  appChannels_every?: InputMaybe<ChannelWhereInput>;
  appChannels_none?: InputMaybe<ChannelWhereInput>;
  appChannels_some?: InputMaybe<ChannelWhereInput>;
  appVideos_every?: InputMaybe<VideoWhereInput>;
  appVideos_none?: InputMaybe<VideoWhereInput>;
  appVideos_some?: InputMaybe<VideoWhereInput>;
  authKey_contains?: InputMaybe<Scalars['String']['input']>;
  authKey_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  authKey_endsWith?: InputMaybe<Scalars['String']['input']>;
  authKey_eq?: InputMaybe<Scalars['String']['input']>;
  authKey_gt?: InputMaybe<Scalars['String']['input']>;
  authKey_gte?: InputMaybe<Scalars['String']['input']>;
  authKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  authKey_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  authKey_lt?: InputMaybe<Scalars['String']['input']>;
  authKey_lte?: InputMaybe<Scalars['String']['input']>;
  authKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  authKey_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  authKey_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  authKey_not_eq?: InputMaybe<Scalars['String']['input']>;
  authKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  authKey_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  authKey_startsWith?: InputMaybe<Scalars['String']['input']>;
  bigIcon_contains?: InputMaybe<Scalars['String']['input']>;
  bigIcon_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  bigIcon_endsWith?: InputMaybe<Scalars['String']['input']>;
  bigIcon_eq?: InputMaybe<Scalars['String']['input']>;
  bigIcon_gt?: InputMaybe<Scalars['String']['input']>;
  bigIcon_gte?: InputMaybe<Scalars['String']['input']>;
  bigIcon_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bigIcon_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  bigIcon_lt?: InputMaybe<Scalars['String']['input']>;
  bigIcon_lte?: InputMaybe<Scalars['String']['input']>;
  bigIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  bigIcon_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  bigIcon_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  bigIcon_not_eq?: InputMaybe<Scalars['String']['input']>;
  bigIcon_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bigIcon_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  bigIcon_startsWith?: InputMaybe<Scalars['String']['input']>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  category_endsWith?: InputMaybe<Scalars['String']['input']>;
  category_eq?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  category_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  category_not_eq?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  category_startsWith?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_eq?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_not_eq?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  description_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_contains?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_endsWith?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_eq?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_gt?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_gte?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mediumIcon_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  mediumIcon_lt?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_lte?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_not_eq?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mediumIcon_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  mediumIcon_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_startsWith?: InputMaybe<Scalars['String']['input']>;
  oneLiner_contains?: InputMaybe<Scalars['String']['input']>;
  oneLiner_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  oneLiner_endsWith?: InputMaybe<Scalars['String']['input']>;
  oneLiner_eq?: InputMaybe<Scalars['String']['input']>;
  oneLiner_gt?: InputMaybe<Scalars['String']['input']>;
  oneLiner_gte?: InputMaybe<Scalars['String']['input']>;
  oneLiner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oneLiner_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  oneLiner_lt?: InputMaybe<Scalars['String']['input']>;
  oneLiner_lte?: InputMaybe<Scalars['String']['input']>;
  oneLiner_not_contains?: InputMaybe<Scalars['String']['input']>;
  oneLiner_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  oneLiner_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  oneLiner_not_eq?: InputMaybe<Scalars['String']['input']>;
  oneLiner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oneLiner_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  oneLiner_startsWith?: InputMaybe<Scalars['String']['input']>;
  ownerMember?: InputMaybe<MembershipWhereInput>;
  ownerMember_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  platforms_containsAll?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  platforms_containsAny?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  platforms_containsNone?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  platforms_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  smallIcon_contains?: InputMaybe<Scalars['String']['input']>;
  smallIcon_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  smallIcon_endsWith?: InputMaybe<Scalars['String']['input']>;
  smallIcon_eq?: InputMaybe<Scalars['String']['input']>;
  smallIcon_gt?: InputMaybe<Scalars['String']['input']>;
  smallIcon_gte?: InputMaybe<Scalars['String']['input']>;
  smallIcon_in?: InputMaybe<Array<Scalars['String']['input']>>;
  smallIcon_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  smallIcon_lt?: InputMaybe<Scalars['String']['input']>;
  smallIcon_lte?: InputMaybe<Scalars['String']['input']>;
  smallIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  smallIcon_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  smallIcon_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  smallIcon_not_eq?: InputMaybe<Scalars['String']['input']>;
  smallIcon_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  smallIcon_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  smallIcon_startsWith?: InputMaybe<Scalars['String']['input']>;
  termsOfService_contains?: InputMaybe<Scalars['String']['input']>;
  termsOfService_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  termsOfService_endsWith?: InputMaybe<Scalars['String']['input']>;
  termsOfService_eq?: InputMaybe<Scalars['String']['input']>;
  termsOfService_gt?: InputMaybe<Scalars['String']['input']>;
  termsOfService_gte?: InputMaybe<Scalars['String']['input']>;
  termsOfService_in?: InputMaybe<Array<Scalars['String']['input']>>;
  termsOfService_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  termsOfService_lt?: InputMaybe<Scalars['String']['input']>;
  termsOfService_lte?: InputMaybe<Scalars['String']['input']>;
  termsOfService_not_contains?: InputMaybe<Scalars['String']['input']>;
  termsOfService_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  termsOfService_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  termsOfService_not_eq?: InputMaybe<Scalars['String']['input']>;
  termsOfService_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  termsOfService_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  termsOfService_startsWith?: InputMaybe<Scalars['String']['input']>;
  useUri_contains?: InputMaybe<Scalars['String']['input']>;
  useUri_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  useUri_endsWith?: InputMaybe<Scalars['String']['input']>;
  useUri_eq?: InputMaybe<Scalars['String']['input']>;
  useUri_gt?: InputMaybe<Scalars['String']['input']>;
  useUri_gte?: InputMaybe<Scalars['String']['input']>;
  useUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  useUri_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  useUri_lt?: InputMaybe<Scalars['String']['input']>;
  useUri_lte?: InputMaybe<Scalars['String']['input']>;
  useUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  useUri_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  useUri_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  useUri_not_eq?: InputMaybe<Scalars['String']['input']>;
  useUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  useUri_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  useUri_startsWith?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_contains?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_endsWith?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_eq?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_gt?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_gte?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  websiteUrl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  websiteUrl_lt?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_lte?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_not_eq?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  websiteUrl_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  websiteUrl_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type AppsConnection = {
  __typename?: 'AppsConnection';
  edges: Array<AppEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Represents NFT auction */
export type Auction = {
  __typename?: 'Auction';
  /** The type of auction */
  auctionType: AuctionType;
  /** All bids made during this auction */
  bids: Array<Bid>;
  /** Price at which the auction gets completed instantly (if any) */
  buyNowPrice?: Maybe<Scalars['BigInt']['output']>;
  /** Block when auction ended */
  endedAtBlock?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier */
  id: Scalars['String']['output'];
  /** Is auction canceled */
  isCanceled: Scalars['Boolean']['output'];
  /** Is auction completed */
  isCompleted: Scalars['Boolean']['output'];
  /** Auctioned NFT */
  nft: OwnedNft;
  /** Auction starting price */
  startingPrice: Scalars['BigInt']['output'];
  /** Block when auction starts */
  startsAtBlock: Scalars['Int']['output'];
  /** Auction last bid (if exists) */
  topBid?: Maybe<Bid>;
  /** Auction participants whitelist */
  whitelistedMembers: Array<AuctionWhitelistedMember>;
  /** Member that won this auction */
  winningMember?: Maybe<Membership>;
};


/** Represents NFT auction */
export type AuctionBidsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BidOrderByInput>>;
  where?: InputMaybe<BidWhereInput>;
};


/** Represents NFT auction */
export type AuctionWhitelistedMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuctionWhitelistedMemberOrderByInput>>;
  where?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
};

export type AuctionBidCanceledEventData = {
  __typename?: 'AuctionBidCanceledEventData';
  /** The bid that got canceled. */
  bid: Bid;
  /** Member that canceled the bid. */
  member: Membership;
  /** Nft owner at the time it was being auctioned. */
  nftOwner: NftOwner;
};

export type AuctionBidMadeEventData = {
  __typename?: 'AuctionBidMadeEventData';
  /** The bid that was submitted  */
  bid: Bid;
  /** Nft owner at the time it was being auctioned. */
  nftOwner: NftOwner;
};

export type AuctionCanceledEventData = {
  __typename?: 'AuctionCanceledEventData';
  /** Content actor canceling the auction. */
  actor: ContentActor;
  /** Auction that was canceled. */
  auction: Auction;
  /** Nft owner at the time the auction was being auctioned. */
  nftOwner: NftOwner;
};

export type AuctionEdge = {
  __typename?: 'AuctionEdge';
  cursor: Scalars['String']['output'];
  node: Auction;
};

export enum AuctionOrderByInput {
  AuctionTypeBidLockDurationAsc = 'auctionType_bidLockDuration_ASC',
  AuctionTypeBidLockDurationDesc = 'auctionType_bidLockDuration_DESC',
  AuctionTypeDurationAsc = 'auctionType_duration_ASC',
  AuctionTypeDurationDesc = 'auctionType_duration_DESC',
  AuctionTypeExtensionPeriodAsc = 'auctionType_extensionPeriod_ASC',
  AuctionTypeExtensionPeriodDesc = 'auctionType_extensionPeriod_DESC',
  AuctionTypeIsTypeOfAsc = 'auctionType_isTypeOf_ASC',
  AuctionTypeIsTypeOfDesc = 'auctionType_isTypeOf_DESC',
  AuctionTypeMinimalBidStepAsc = 'auctionType_minimalBidStep_ASC',
  AuctionTypeMinimalBidStepDesc = 'auctionType_minimalBidStep_DESC',
  AuctionTypePlannedEndAtBlockAsc = 'auctionType_plannedEndAtBlock_ASC',
  AuctionTypePlannedEndAtBlockDesc = 'auctionType_plannedEndAtBlock_DESC',
  BuyNowPriceAsc = 'buyNowPrice_ASC',
  BuyNowPriceDesc = 'buyNowPrice_DESC',
  EndedAtBlockAsc = 'endedAtBlock_ASC',
  EndedAtBlockDesc = 'endedAtBlock_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsCanceledAsc = 'isCanceled_ASC',
  IsCanceledDesc = 'isCanceled_DESC',
  IsCompletedAsc = 'isCompleted_ASC',
  IsCompletedDesc = 'isCompleted_DESC',
  NftCreatedAtAsc = 'nft_createdAt_ASC',
  NftCreatedAtDesc = 'nft_createdAt_DESC',
  NftCreatorRoyaltyAsc = 'nft_creatorRoyalty_ASC',
  NftCreatorRoyaltyDesc = 'nft_creatorRoyalty_DESC',
  NftIdAsc = 'nft_id_ASC',
  NftIdDesc = 'nft_id_DESC',
  NftIsFeaturedAsc = 'nft_isFeatured_ASC',
  NftIsFeaturedDesc = 'nft_isFeatured_DESC',
  NftLastSaleDateAsc = 'nft_lastSaleDate_ASC',
  NftLastSaleDateDesc = 'nft_lastSaleDate_DESC',
  NftLastSalePriceAsc = 'nft_lastSalePrice_ASC',
  NftLastSalePriceDesc = 'nft_lastSalePrice_DESC',
  StartingPriceAsc = 'startingPrice_ASC',
  StartingPriceDesc = 'startingPrice_DESC',
  StartsAtBlockAsc = 'startsAtBlock_ASC',
  StartsAtBlockDesc = 'startsAtBlock_DESC',
  TopBidAmountAsc = 'topBid_amount_ASC',
  TopBidAmountDesc = 'topBid_amount_DESC',
  TopBidCreatedAtAsc = 'topBid_createdAt_ASC',
  TopBidCreatedAtDesc = 'topBid_createdAt_DESC',
  TopBidCreatedInBlockAsc = 'topBid_createdInBlock_ASC',
  TopBidCreatedInBlockDesc = 'topBid_createdInBlock_DESC',
  TopBidIdAsc = 'topBid_id_ASC',
  TopBidIdDesc = 'topBid_id_DESC',
  TopBidIndexInBlockAsc = 'topBid_indexInBlock_ASC',
  TopBidIndexInBlockDesc = 'topBid_indexInBlock_DESC',
  TopBidIsCanceledAsc = 'topBid_isCanceled_ASC',
  TopBidIsCanceledDesc = 'topBid_isCanceled_DESC',
  WinningMemberControllerAccountAsc = 'winningMember_controllerAccount_ASC',
  WinningMemberControllerAccountDesc = 'winningMember_controllerAccount_DESC',
  WinningMemberCreatedAtAsc = 'winningMember_createdAt_ASC',
  WinningMemberCreatedAtDesc = 'winningMember_createdAt_DESC',
  WinningMemberHandleAsc = 'winningMember_handle_ASC',
  WinningMemberHandleDesc = 'winningMember_handle_DESC',
  WinningMemberIdAsc = 'winningMember_id_ASC',
  WinningMemberIdDesc = 'winningMember_id_DESC',
  WinningMemberTotalChannelsCreatedAsc = 'winningMember_totalChannelsCreated_ASC',
  WinningMemberTotalChannelsCreatedDesc = 'winningMember_totalChannelsCreated_DESC'
}

/** Represents various action types */
export type AuctionType = AuctionTypeEnglish | AuctionTypeOpen;

/** Represents English auction details */
export type AuctionTypeEnglish = {
  __typename?: 'AuctionTypeEnglish';
  /** English auction duration in blocks */
  duration: Scalars['Int']['output'];
  /** Auction extension period in blocks */
  extensionPeriod: Scalars['Int']['output'];
  /** Minimal step between auction bids */
  minimalBidStep: Scalars['BigInt']['output'];
  /** Block when auction is supposed to end */
  plannedEndAtBlock: Scalars['Int']['output'];
};

/** Represents Open auction details */
export type AuctionTypeOpen = {
  __typename?: 'AuctionTypeOpen';
  /** Auction bid lock duration */
  bidLockDuration: Scalars['Int']['output'];
};

export type AuctionTypeWhereInput = {
  bidLockDuration_eq?: InputMaybe<Scalars['Int']['input']>;
  bidLockDuration_gt?: InputMaybe<Scalars['Int']['input']>;
  bidLockDuration_gte?: InputMaybe<Scalars['Int']['input']>;
  bidLockDuration_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  bidLockDuration_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  bidLockDuration_lt?: InputMaybe<Scalars['Int']['input']>;
  bidLockDuration_lte?: InputMaybe<Scalars['Int']['input']>;
  bidLockDuration_not_eq?: InputMaybe<Scalars['Int']['input']>;
  bidLockDuration_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  duration_eq?: InputMaybe<Scalars['Int']['input']>;
  duration_gt?: InputMaybe<Scalars['Int']['input']>;
  duration_gte?: InputMaybe<Scalars['Int']['input']>;
  duration_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  duration_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  duration_lt?: InputMaybe<Scalars['Int']['input']>;
  duration_lte?: InputMaybe<Scalars['Int']['input']>;
  duration_not_eq?: InputMaybe<Scalars['Int']['input']>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  extensionPeriod_eq?: InputMaybe<Scalars['Int']['input']>;
  extensionPeriod_gt?: InputMaybe<Scalars['Int']['input']>;
  extensionPeriod_gte?: InputMaybe<Scalars['Int']['input']>;
  extensionPeriod_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  extensionPeriod_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  extensionPeriod_lt?: InputMaybe<Scalars['Int']['input']>;
  extensionPeriod_lte?: InputMaybe<Scalars['Int']['input']>;
  extensionPeriod_not_eq?: InputMaybe<Scalars['Int']['input']>;
  extensionPeriod_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  minimalBidStep_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minimalBidStep_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimalBidStep_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimalBidStep_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimalBidStep_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minimalBidStep_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimalBidStep_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimalBidStep_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minimalBidStep_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  plannedEndAtBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  plannedEndAtBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  plannedEndAtBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  plannedEndAtBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  plannedEndAtBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  plannedEndAtBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  plannedEndAtBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  plannedEndAtBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  plannedEndAtBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type AuctionWhereInput = {
  AND?: InputMaybe<Array<AuctionWhereInput>>;
  OR?: InputMaybe<Array<AuctionWhereInput>>;
  auctionType?: InputMaybe<AuctionTypeWhereInput>;
  auctionType_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  bids_every?: InputMaybe<BidWhereInput>;
  bids_none?: InputMaybe<BidWhereInput>;
  bids_some?: InputMaybe<BidWhereInput>;
  buyNowPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  buyNowPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  buyNowPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  buyNowPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyNowPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  buyNowPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  buyNowPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  buyNowPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  buyNowPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endedAtBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  endedAtBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  endedAtBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  endedAtBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  endedAtBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  endedAtBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  endedAtBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  endedAtBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  endedAtBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isCanceled_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCanceled_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isCanceled_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  nft?: InputMaybe<OwnedNftWhereInput>;
  nft_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  startingPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startingPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startingPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startingPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startingPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  startingPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startingPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startingPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  startingPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startsAtBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  startsAtBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  startsAtBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  startsAtBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startsAtBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  startsAtBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  startsAtBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  startsAtBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  startsAtBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  topBid?: InputMaybe<BidWhereInput>;
  topBid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  whitelistedMembers_every?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
  whitelistedMembers_none?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
  whitelistedMembers_some?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
  winningMember?: InputMaybe<MembershipWhereInput>;
  winningMember_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuctionWhitelistedMember = {
  __typename?: 'AuctionWhitelistedMember';
  auction: Auction;
  /** {auctionId}-{memberId} */
  id: Scalars['String']['output'];
  member: Membership;
};

export type AuctionWhitelistedMemberEdge = {
  __typename?: 'AuctionWhitelistedMemberEdge';
  cursor: Scalars['String']['output'];
  node: AuctionWhitelistedMember;
};

export enum AuctionWhitelistedMemberOrderByInput {
  AuctionBuyNowPriceAsc = 'auction_buyNowPrice_ASC',
  AuctionBuyNowPriceDesc = 'auction_buyNowPrice_DESC',
  AuctionEndedAtBlockAsc = 'auction_endedAtBlock_ASC',
  AuctionEndedAtBlockDesc = 'auction_endedAtBlock_DESC',
  AuctionIdAsc = 'auction_id_ASC',
  AuctionIdDesc = 'auction_id_DESC',
  AuctionIsCanceledAsc = 'auction_isCanceled_ASC',
  AuctionIsCanceledDesc = 'auction_isCanceled_DESC',
  AuctionIsCompletedAsc = 'auction_isCompleted_ASC',
  AuctionIsCompletedDesc = 'auction_isCompleted_DESC',
  AuctionStartingPriceAsc = 'auction_startingPrice_ASC',
  AuctionStartingPriceDesc = 'auction_startingPrice_DESC',
  AuctionStartsAtBlockAsc = 'auction_startsAtBlock_ASC',
  AuctionStartsAtBlockDesc = 'auction_startsAtBlock_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberControllerAccountAsc = 'member_controllerAccount_ASC',
  MemberControllerAccountDesc = 'member_controllerAccount_DESC',
  MemberCreatedAtAsc = 'member_createdAt_ASC',
  MemberCreatedAtDesc = 'member_createdAt_DESC',
  MemberHandleAsc = 'member_handle_ASC',
  MemberHandleDesc = 'member_handle_DESC',
  MemberIdAsc = 'member_id_ASC',
  MemberIdDesc = 'member_id_DESC',
  MemberTotalChannelsCreatedAsc = 'member_totalChannelsCreated_ASC',
  MemberTotalChannelsCreatedDesc = 'member_totalChannelsCreated_DESC'
}

export type AuctionWhitelistedMemberWhereInput = {
  AND?: InputMaybe<Array<AuctionWhitelistedMemberWhereInput>>;
  OR?: InputMaybe<Array<AuctionWhitelistedMemberWhereInput>>;
  auction?: InputMaybe<AuctionWhereInput>;
  auction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuctionWhitelistedMembersConnection = {
  __typename?: 'AuctionWhitelistedMembersConnection';
  edges: Array<AuctionWhitelistedMemberEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AuctionsConnection = {
  __typename?: 'AuctionsConnection';
  edges: Array<AuctionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Avatar = AvatarObject | AvatarUri;

export type AvatarObject = {
  __typename?: 'AvatarObject';
  /** The avatar data object */
  avatarObject: StorageDataObject;
};

export type AvatarUri = {
  __typename?: 'AvatarUri';
  /** The avatar URL */
  avatarUri: Scalars['String']['output'];
};

export type AvatarWhereInput = {
  avatarObject?: InputMaybe<StorageDataObjectWhereInput>;
  avatarObject_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  avatarUri_contains?: InputMaybe<Scalars['String']['input']>;
  avatarUri_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  avatarUri_endsWith?: InputMaybe<Scalars['String']['input']>;
  avatarUri_eq?: InputMaybe<Scalars['String']['input']>;
  avatarUri_gt?: InputMaybe<Scalars['String']['input']>;
  avatarUri_gte?: InputMaybe<Scalars['String']['input']>;
  avatarUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  avatarUri_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  avatarUri_lt?: InputMaybe<Scalars['String']['input']>;
  avatarUri_lte?: InputMaybe<Scalars['String']['input']>;
  avatarUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  avatarUri_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  avatarUri_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  avatarUri_not_eq?: InputMaybe<Scalars['String']['input']>;
  avatarUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  avatarUri_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  avatarUri_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type BannedMember = {
  __typename?: 'BannedMember';
  channel: Channel;
  /** {memberId}-{channelId} */
  id: Scalars['String']['output'];
  member: Membership;
};

export type BannedMemberEdge = {
  __typename?: 'BannedMemberEdge';
  cursor: Scalars['String']['output'];
  node: BannedMember;
};

export enum BannedMemberOrderByInput {
  ChannelChannelStateBloatBondAsc = 'channel_channelStateBloatBond_ASC',
  ChannelChannelStateBloatBondDesc = 'channel_channelStateBloatBond_DESC',
  ChannelCreatedAtAsc = 'channel_createdAt_ASC',
  ChannelCreatedAtDesc = 'channel_createdAt_DESC',
  ChannelCreatedInBlockAsc = 'channel_createdInBlock_ASC',
  ChannelCreatedInBlockDesc = 'channel_createdInBlock_DESC',
  ChannelCumulativeRewardClaimedAsc = 'channel_cumulativeRewardClaimed_ASC',
  ChannelCumulativeRewardClaimedDesc = 'channel_cumulativeRewardClaimed_DESC',
  ChannelDescriptionAsc = 'channel_description_ASC',
  ChannelDescriptionDesc = 'channel_description_DESC',
  ChannelFollowsNumAsc = 'channel_followsNum_ASC',
  ChannelFollowsNumDesc = 'channel_followsNum_DESC',
  ChannelIdAsc = 'channel_id_ASC',
  ChannelIdDesc = 'channel_id_DESC',
  ChannelIsCensoredAsc = 'channel_isCensored_ASC',
  ChannelIsCensoredDesc = 'channel_isCensored_DESC',
  ChannelIsExcludedAsc = 'channel_isExcluded_ASC',
  ChannelIsExcludedDesc = 'channel_isExcluded_DESC',
  ChannelIsPublicAsc = 'channel_isPublic_ASC',
  ChannelIsPublicDesc = 'channel_isPublic_DESC',
  ChannelLanguageAsc = 'channel_language_ASC',
  ChannelLanguageDesc = 'channel_language_DESC',
  ChannelRewardAccountAsc = 'channel_rewardAccount_ASC',
  ChannelRewardAccountDesc = 'channel_rewardAccount_DESC',
  ChannelTitleAsc = 'channel_title_ASC',
  ChannelTitleDesc = 'channel_title_DESC',
  ChannelTotalVideosCreatedAsc = 'channel_totalVideosCreated_ASC',
  ChannelTotalVideosCreatedDesc = 'channel_totalVideosCreated_DESC',
  ChannelVideoViewsNumAsc = 'channel_videoViewsNum_ASC',
  ChannelVideoViewsNumDesc = 'channel_videoViewsNum_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberControllerAccountAsc = 'member_controllerAccount_ASC',
  MemberControllerAccountDesc = 'member_controllerAccount_DESC',
  MemberCreatedAtAsc = 'member_createdAt_ASC',
  MemberCreatedAtDesc = 'member_createdAt_DESC',
  MemberHandleAsc = 'member_handle_ASC',
  MemberHandleDesc = 'member_handle_DESC',
  MemberIdAsc = 'member_id_ASC',
  MemberIdDesc = 'member_id_DESC',
  MemberTotalChannelsCreatedAsc = 'member_totalChannelsCreated_ASC',
  MemberTotalChannelsCreatedDesc = 'member_totalChannelsCreated_DESC'
}

export type BannedMemberWhereInput = {
  AND?: InputMaybe<Array<BannedMemberWhereInput>>;
  OR?: InputMaybe<Array<BannedMemberWhereInput>>;
  channel?: InputMaybe<ChannelWhereInput>;
  channel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannedMembersConnection = {
  __typename?: 'BannedMembersConnection';
  edges: Array<BannedMemberEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Represents bid in NFT auction */
export type Bid = {
  __typename?: 'Bid';
  /** Amount bidded */
  amount: Scalars['BigInt']['output'];
  /** NFT's auction */
  auction: Auction;
  /** Bidder membership */
  bidder: Membership;
  /** Timestamp of the block the bid was created at */
  createdAt: Scalars['DateTime']['output'];
  /** Block in which the bid was placed */
  createdInBlock: Scalars['Int']['output'];
  /** Unique identifier */
  id: Scalars['String']['output'];
  /** Index in block of the related AuctionBidMade event */
  indexInBlock: Scalars['Int']['output'];
  /** Sign for canceled bid */
  isCanceled: Scalars['Boolean']['output'];
  /** Bid's NFT */
  nft: OwnedNft;
  /** Bid that was displaced by this bid in the English auction (if any) */
  previousTopBid?: Maybe<Bid>;
};

export type BidEdge = {
  __typename?: 'BidEdge';
  cursor: Scalars['String']['output'];
  node: Bid;
};

export type BidMadeCompletingAuctionEventData = {
  __typename?: 'BidMadeCompletingAuctionEventData';
  /** NFT owner before the auction was completed */
  previousNftOwner: NftOwner;
  /** Bid that completed the auction */
  winningBid: Bid;
};

export enum BidOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  AuctionBuyNowPriceAsc = 'auction_buyNowPrice_ASC',
  AuctionBuyNowPriceDesc = 'auction_buyNowPrice_DESC',
  AuctionEndedAtBlockAsc = 'auction_endedAtBlock_ASC',
  AuctionEndedAtBlockDesc = 'auction_endedAtBlock_DESC',
  AuctionIdAsc = 'auction_id_ASC',
  AuctionIdDesc = 'auction_id_DESC',
  AuctionIsCanceledAsc = 'auction_isCanceled_ASC',
  AuctionIsCanceledDesc = 'auction_isCanceled_DESC',
  AuctionIsCompletedAsc = 'auction_isCompleted_ASC',
  AuctionIsCompletedDesc = 'auction_isCompleted_DESC',
  AuctionStartingPriceAsc = 'auction_startingPrice_ASC',
  AuctionStartingPriceDesc = 'auction_startingPrice_DESC',
  AuctionStartsAtBlockAsc = 'auction_startsAtBlock_ASC',
  AuctionStartsAtBlockDesc = 'auction_startsAtBlock_DESC',
  BidderControllerAccountAsc = 'bidder_controllerAccount_ASC',
  BidderControllerAccountDesc = 'bidder_controllerAccount_DESC',
  BidderCreatedAtAsc = 'bidder_createdAt_ASC',
  BidderCreatedAtDesc = 'bidder_createdAt_DESC',
  BidderHandleAsc = 'bidder_handle_ASC',
  BidderHandleDesc = 'bidder_handle_DESC',
  BidderIdAsc = 'bidder_id_ASC',
  BidderIdDesc = 'bidder_id_DESC',
  BidderTotalChannelsCreatedAsc = 'bidder_totalChannelsCreated_ASC',
  BidderTotalChannelsCreatedDesc = 'bidder_totalChannelsCreated_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  IsCanceledAsc = 'isCanceled_ASC',
  IsCanceledDesc = 'isCanceled_DESC',
  NftCreatedAtAsc = 'nft_createdAt_ASC',
  NftCreatedAtDesc = 'nft_createdAt_DESC',
  NftCreatorRoyaltyAsc = 'nft_creatorRoyalty_ASC',
  NftCreatorRoyaltyDesc = 'nft_creatorRoyalty_DESC',
  NftIdAsc = 'nft_id_ASC',
  NftIdDesc = 'nft_id_DESC',
  NftIsFeaturedAsc = 'nft_isFeatured_ASC',
  NftIsFeaturedDesc = 'nft_isFeatured_DESC',
  NftLastSaleDateAsc = 'nft_lastSaleDate_ASC',
  NftLastSaleDateDesc = 'nft_lastSaleDate_DESC',
  NftLastSalePriceAsc = 'nft_lastSalePrice_ASC',
  NftLastSalePriceDesc = 'nft_lastSalePrice_DESC',
  PreviousTopBidAmountAsc = 'previousTopBid_amount_ASC',
  PreviousTopBidAmountDesc = 'previousTopBid_amount_DESC',
  PreviousTopBidCreatedAtAsc = 'previousTopBid_createdAt_ASC',
  PreviousTopBidCreatedAtDesc = 'previousTopBid_createdAt_DESC',
  PreviousTopBidCreatedInBlockAsc = 'previousTopBid_createdInBlock_ASC',
  PreviousTopBidCreatedInBlockDesc = 'previousTopBid_createdInBlock_DESC',
  PreviousTopBidIdAsc = 'previousTopBid_id_ASC',
  PreviousTopBidIdDesc = 'previousTopBid_id_DESC',
  PreviousTopBidIndexInBlockAsc = 'previousTopBid_indexInBlock_ASC',
  PreviousTopBidIndexInBlockDesc = 'previousTopBid_indexInBlock_DESC',
  PreviousTopBidIsCanceledAsc = 'previousTopBid_isCanceled_ASC',
  PreviousTopBidIsCanceledDesc = 'previousTopBid_isCanceled_DESC'
}

export type BidWhereInput = {
  AND?: InputMaybe<Array<BidWhereInput>>;
  OR?: InputMaybe<Array<BidWhereInput>>;
  amount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  auction?: InputMaybe<AuctionWhereInput>;
  auction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  bidder?: InputMaybe<MembershipWhereInput>;
  bidder_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdInBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdInBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdInBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  indexInBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexInBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  indexInBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isCanceled_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCanceled_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isCanceled_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  nft?: InputMaybe<OwnedNftWhereInput>;
  nft_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  previousTopBid?: InputMaybe<BidWhereInput>;
  previousTopBid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BidsConnection = {
  __typename?: 'BidsConnection';
  edges: Array<BidEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BuyNowCanceledEventData = {
  __typename?: 'BuyNowCanceledEventData';
  /** Content actor acting as NFT owner. */
  actor: ContentActor;
  /** The NFT for which the buy now offer was canceled */
  nft: OwnedNft;
  /** Owner of the NFT at the time the buy now offer was canceled. */
  nftOwner: NftOwner;
};

export type BuyNowPriceUpdatedEventData = {
  __typename?: 'BuyNowPriceUpdatedEventData';
  /** Content actor acting as NFT owner. */
  actor: ContentActor;
  /** New sell order price. */
  newPrice: Scalars['BigInt']['output'];
  /** NFT being sold */
  nft: OwnedNft;
  /** NFT owner at the time it was on sale */
  nftOwner: NftOwner;
};

export type Channel = {
  __typename?: 'Channel';
  /** Channel's avatar photo asset. */
  avatarPhoto?: Maybe<StorageDataObject>;
  /** List of members blocked from commenting/reacting on any video of the channel. */
  bannedMembers: Array<BannedMember>;
  /** Value of channel state bloat bond fee paid by channel creator */
  channelStateBloatBond: Scalars['BigInt']['output'];
  /** Channel's cover (background) photo asset. Recommended ratio: 16:9. */
  coverPhoto?: Maybe<StorageDataObject>;
  /** Timestamp of the block the channel was created at */
  createdAt: Scalars['DateTime']['output'];
  /** Number of the block the channel was created in */
  createdInBlock: Scalars['Int']['output'];
  /** Cumulative rewards claimed by this channel */
  cumulativeRewardClaimed?: Maybe<Scalars['BigInt']['output']>;
  /** The description of a Channel */
  description?: Maybe<Scalars['String']['output']>;
  /** Application used for channel creation */
  entryApp?: Maybe<App>;
  /** Number of active follows (to speed up orderBy queries by avoiding COUNT aggregation) */
  followsNum: Scalars['Int']['output'];
  /** Runtime entity identifier (EntityId) */
  id: Scalars['String']['output'];
  /** Flag signaling whether a channel is censored. */
  isCensored: Scalars['Boolean']['output'];
  /** Whether a channel has been excluded/hidden (by the gateway operator) */
  isExcluded: Scalars['Boolean']['output'];
  /** Flag signaling whether a channel is public. */
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  /** The primary langauge of the channel's content */
  language?: Maybe<Scalars['String']['output']>;
  /** Current member-owner of the channel (if owned by a member) */
  ownerMember?: Maybe<Membership>;
  /** Channel's reward account, storing the income from the nft sales and channel payouts. */
  rewardAccount: Scalars['String']['output'];
  /** The title of the Channel */
  title?: Maybe<Scalars['String']['output']>;
  /** Number of videos ever created in this channel */
  totalVideosCreated: Scalars['Int']['output'];
  /** Number of total video views (to speed up orderBy queries by avoiding COUNT aggregation) */
  videoViewsNum: Scalars['Int']['output'];
  /** List of videos that belong to the channel */
  videos: Array<Video>;
};


export type ChannelBannedMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BannedMemberOrderByInput>>;
  where?: InputMaybe<BannedMemberWhereInput>;
};


export type ChannelVideosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoOrderByInput>>;
  where?: InputMaybe<VideoWhereInput>;
};

export type ChannelEdge = {
  __typename?: 'ChannelEdge';
  cursor: Scalars['String']['output'];
  node: Channel;
};

export type ChannelFollow = {
  __typename?: 'ChannelFollow';
  /** ID of the channel being followed (the channel may no longer exist) */
  channelId: Scalars['String']['output'];
  /** Unique identifier of the follow, also serves as a 'cancelToken' that needs to be provided when unfollowing the channel (to prevent abuse / inconsistent state) */
  id: Scalars['String']['output'];
  /** IP address of the follower */
  ip: Scalars['String']['output'];
  /** Time when user started following the channel */
  timestamp: Scalars['DateTime']['output'];
};

export type ChannelFollowEdge = {
  __typename?: 'ChannelFollowEdge';
  cursor: Scalars['String']['output'];
  node: ChannelFollow;
};

export enum ChannelFollowOrderByInput {
  ChannelIdAsc = 'channelId_ASC',
  ChannelIdDesc = 'channelId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IpAsc = 'ip_ASC',
  IpDesc = 'ip_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type ChannelFollowResult = {
  __typename?: 'ChannelFollowResult';
  added: Scalars['Boolean']['output'];
  cancelToken: Scalars['String']['output'];
  channelId: Scalars['String']['output'];
  follows: Scalars['Int']['output'];
};

export type ChannelFollowWhereInput = {
  AND?: InputMaybe<Array<ChannelFollowWhereInput>>;
  OR?: InputMaybe<Array<ChannelFollowWhereInput>>;
  channelId_contains?: InputMaybe<Scalars['String']['input']>;
  channelId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  channelId_endsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_eq?: InputMaybe<Scalars['String']['input']>;
  channelId_gt?: InputMaybe<Scalars['String']['input']>;
  channelId_gte?: InputMaybe<Scalars['String']['input']>;
  channelId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  channelId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  channelId_lt?: InputMaybe<Scalars['String']['input']>;
  channelId_lte?: InputMaybe<Scalars['String']['input']>;
  channelId_not_contains?: InputMaybe<Scalars['String']['input']>;
  channelId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  channelId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_not_eq?: InputMaybe<Scalars['String']['input']>;
  channelId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  channelId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_contains?: InputMaybe<Scalars['String']['input']>;
  ip_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_eq?: InputMaybe<Scalars['String']['input']>;
  ip_gt?: InputMaybe<Scalars['String']['input']>;
  ip_gte?: InputMaybe<Scalars['String']['input']>;
  ip_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ip_lt?: InputMaybe<Scalars['String']['input']>;
  ip_lte?: InputMaybe<Scalars['String']['input']>;
  ip_not_contains?: InputMaybe<Scalars['String']['input']>;
  ip_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_not_eq?: InputMaybe<Scalars['String']['input']>;
  ip_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type ChannelFollowsConnection = {
  __typename?: 'ChannelFollowsConnection';
  edges: Array<ChannelFollowEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ChannelFundsWithdrawnEventData = {
  __typename?: 'ChannelFundsWithdrawnEventData';
  /** Destination account ID. Null if claimed by curators' channel (paid to council budget in this case) */
  account?: Maybe<Scalars['String']['output']>;
  /** Content actor */
  actor: ContentActor;
  /** Reward amount claimed */
  amount: Scalars['BigInt']['output'];
  /** The channel that claimed the reward */
  channel: Channel;
};

export type ChannelNftCollector = {
  __typename?: 'ChannelNftCollector';
  amount: Scalars['Int']['output'];
  member: Membership;
};

export enum ChannelNftCollectorsOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export enum ChannelOrderByInput {
  AvatarPhotoCreatedAtAsc = 'avatarPhoto_createdAt_ASC',
  AvatarPhotoCreatedAtDesc = 'avatarPhoto_createdAt_DESC',
  AvatarPhotoIdAsc = 'avatarPhoto_id_ASC',
  AvatarPhotoIdDesc = 'avatarPhoto_id_DESC',
  AvatarPhotoIpfsHashAsc = 'avatarPhoto_ipfsHash_ASC',
  AvatarPhotoIpfsHashDesc = 'avatarPhoto_ipfsHash_DESC',
  AvatarPhotoIsAcceptedAsc = 'avatarPhoto_isAccepted_ASC',
  AvatarPhotoIsAcceptedDesc = 'avatarPhoto_isAccepted_DESC',
  AvatarPhotoSizeAsc = 'avatarPhoto_size_ASC',
  AvatarPhotoSizeDesc = 'avatarPhoto_size_DESC',
  AvatarPhotoStateBloatBondAsc = 'avatarPhoto_stateBloatBond_ASC',
  AvatarPhotoStateBloatBondDesc = 'avatarPhoto_stateBloatBond_DESC',
  AvatarPhotoUnsetAtAsc = 'avatarPhoto_unsetAt_ASC',
  AvatarPhotoUnsetAtDesc = 'avatarPhoto_unsetAt_DESC',
  ChannelStateBloatBondAsc = 'channelStateBloatBond_ASC',
  ChannelStateBloatBondDesc = 'channelStateBloatBond_DESC',
  CoverPhotoCreatedAtAsc = 'coverPhoto_createdAt_ASC',
  CoverPhotoCreatedAtDesc = 'coverPhoto_createdAt_DESC',
  CoverPhotoIdAsc = 'coverPhoto_id_ASC',
  CoverPhotoIdDesc = 'coverPhoto_id_DESC',
  CoverPhotoIpfsHashAsc = 'coverPhoto_ipfsHash_ASC',
  CoverPhotoIpfsHashDesc = 'coverPhoto_ipfsHash_DESC',
  CoverPhotoIsAcceptedAsc = 'coverPhoto_isAccepted_ASC',
  CoverPhotoIsAcceptedDesc = 'coverPhoto_isAccepted_DESC',
  CoverPhotoSizeAsc = 'coverPhoto_size_ASC',
  CoverPhotoSizeDesc = 'coverPhoto_size_DESC',
  CoverPhotoStateBloatBondAsc = 'coverPhoto_stateBloatBond_ASC',
  CoverPhotoStateBloatBondDesc = 'coverPhoto_stateBloatBond_DESC',
  CoverPhotoUnsetAtAsc = 'coverPhoto_unsetAt_ASC',
  CoverPhotoUnsetAtDesc = 'coverPhoto_unsetAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  CumulativeRewardClaimedAsc = 'cumulativeRewardClaimed_ASC',
  CumulativeRewardClaimedDesc = 'cumulativeRewardClaimed_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EntryAppAuthKeyAsc = 'entryApp_authKey_ASC',
  EntryAppAuthKeyDesc = 'entryApp_authKey_DESC',
  EntryAppBigIconAsc = 'entryApp_bigIcon_ASC',
  EntryAppBigIconDesc = 'entryApp_bigIcon_DESC',
  EntryAppCategoryAsc = 'entryApp_category_ASC',
  EntryAppCategoryDesc = 'entryApp_category_DESC',
  EntryAppDescriptionAsc = 'entryApp_description_ASC',
  EntryAppDescriptionDesc = 'entryApp_description_DESC',
  EntryAppIdAsc = 'entryApp_id_ASC',
  EntryAppIdDesc = 'entryApp_id_DESC',
  EntryAppMediumIconAsc = 'entryApp_mediumIcon_ASC',
  EntryAppMediumIconDesc = 'entryApp_mediumIcon_DESC',
  EntryAppNameAsc = 'entryApp_name_ASC',
  EntryAppNameDesc = 'entryApp_name_DESC',
  EntryAppOneLinerAsc = 'entryApp_oneLiner_ASC',
  EntryAppOneLinerDesc = 'entryApp_oneLiner_DESC',
  EntryAppSmallIconAsc = 'entryApp_smallIcon_ASC',
  EntryAppSmallIconDesc = 'entryApp_smallIcon_DESC',
  EntryAppTermsOfServiceAsc = 'entryApp_termsOfService_ASC',
  EntryAppTermsOfServiceDesc = 'entryApp_termsOfService_DESC',
  EntryAppUseUriAsc = 'entryApp_useUri_ASC',
  EntryAppUseUriDesc = 'entryApp_useUri_DESC',
  EntryAppWebsiteUrlAsc = 'entryApp_websiteUrl_ASC',
  EntryAppWebsiteUrlDesc = 'entryApp_websiteUrl_DESC',
  FollowsNumAsc = 'followsNum_ASC',
  FollowsNumDesc = 'followsNum_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsCensoredAsc = 'isCensored_ASC',
  IsCensoredDesc = 'isCensored_DESC',
  IsExcludedAsc = 'isExcluded_ASC',
  IsExcludedDesc = 'isExcluded_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  OwnerMemberControllerAccountAsc = 'ownerMember_controllerAccount_ASC',
  OwnerMemberControllerAccountDesc = 'ownerMember_controllerAccount_DESC',
  OwnerMemberCreatedAtAsc = 'ownerMember_createdAt_ASC',
  OwnerMemberCreatedAtDesc = 'ownerMember_createdAt_DESC',
  OwnerMemberHandleAsc = 'ownerMember_handle_ASC',
  OwnerMemberHandleDesc = 'ownerMember_handle_DESC',
  OwnerMemberIdAsc = 'ownerMember_id_ASC',
  OwnerMemberIdDesc = 'ownerMember_id_DESC',
  OwnerMemberTotalChannelsCreatedAsc = 'ownerMember_totalChannelsCreated_ASC',
  OwnerMemberTotalChannelsCreatedDesc = 'ownerMember_totalChannelsCreated_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TotalVideosCreatedAsc = 'totalVideosCreated_ASC',
  TotalVideosCreatedDesc = 'totalVideosCreated_DESC',
  VideoViewsNumAsc = 'videoViewsNum_ASC',
  VideoViewsNumDesc = 'videoViewsNum_DESC'
}

/** Direct channel payment by any member by-passing the council payouts */
export type ChannelPaymentMadeEventData = {
  __typename?: 'ChannelPaymentMadeEventData';
  /** Amount of the payment */
  amount: Scalars['BigInt']['output'];
  /** Channel that received the payment (if any) */
  payeeChannel?: Maybe<Channel>;
  /** Actor that made the payment */
  payer: Membership;
  /** Payment and payee context */
  paymentContext?: Maybe<PaymentContext>;
  /** Reason of the payment */
  rationale?: Maybe<Scalars['String']['output']>;
};

export type ChannelPayoutsUpdatedEventData = {
  __typename?: 'ChannelPayoutsUpdatedEventData';
  /** Can channel cashout the rewards */
  channelCashoutsEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Merkle root of the channel payouts */
  commitment?: Maybe<Scalars['String']['output']>;
  /** Maximum amount of channel reward cashout allowed at a time */
  maxCashoutAllowed?: Maybe<Scalars['BigInt']['output']>;
  /** Minimum amount of channel reward cashout allowed at a time */
  minCashoutAllowed?: Maybe<Scalars['BigInt']['output']>;
  /** Storage data object corresponding to the channel payouts payload */
  payloadDataObject?: Maybe<StorageDataObject>;
};

export type ChannelReportInfo = {
  __typename?: 'ChannelReportInfo';
  channelId: Scalars['String']['output'];
  created: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  rationale: Scalars['String']['output'];
  reporterIp: Scalars['String']['output'];
};

export type ChannelRewardClaimedAndWithdrawnEventData = {
  __typename?: 'ChannelRewardClaimedAndWithdrawnEventData';
  /** Destination account ID. Null if claimed by curators' channel (paid to council budget in this case) */
  account?: Maybe<Scalars['String']['output']>;
  /** Content actor */
  actor: ContentActor;
  /** Reward amount claimed */
  amount: Scalars['BigInt']['output'];
  /** The channel that claimed the reward */
  channel: Channel;
};

export type ChannelRewardClaimedEventData = {
  __typename?: 'ChannelRewardClaimedEventData';
  /** Reward amount claimed */
  amount: Scalars['BigInt']['output'];
  /** The channel that claimed the reward */
  channel: Channel;
};

export type ChannelUnfollowResult = {
  __typename?: 'ChannelUnfollowResult';
  channelId: Scalars['String']['output'];
  follows: Scalars['Int']['output'];
  removed: Scalars['Boolean']['output'];
};

export type ChannelWhereInput = {
  AND?: InputMaybe<Array<ChannelWhereInput>>;
  OR?: InputMaybe<Array<ChannelWhereInput>>;
  avatarPhoto?: InputMaybe<StorageDataObjectWhereInput>;
  avatarPhoto_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  bannedMembers_every?: InputMaybe<BannedMemberWhereInput>;
  bannedMembers_none?: InputMaybe<BannedMemberWhereInput>;
  bannedMembers_some?: InputMaybe<BannedMemberWhereInput>;
  channelStateBloatBond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  channelStateBloatBond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  channelStateBloatBond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  channelStateBloatBond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  channelStateBloatBond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  channelStateBloatBond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  channelStateBloatBond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  channelStateBloatBond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  channelStateBloatBond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coverPhoto?: InputMaybe<StorageDataObjectWhereInput>;
  coverPhoto_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdInBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdInBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdInBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeRewardClaimed_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeRewardClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeRewardClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeRewardClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardClaimed_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeRewardClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeRewardClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeRewardClaimed_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeRewardClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_eq?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_not_eq?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  description_startsWith?: InputMaybe<Scalars['String']['input']>;
  entryApp?: InputMaybe<AppWhereInput>;
  entryApp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  followsNum_eq?: InputMaybe<Scalars['Int']['input']>;
  followsNum_gt?: InputMaybe<Scalars['Int']['input']>;
  followsNum_gte?: InputMaybe<Scalars['Int']['input']>;
  followsNum_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  followsNum_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  followsNum_lt?: InputMaybe<Scalars['Int']['input']>;
  followsNum_lte?: InputMaybe<Scalars['Int']['input']>;
  followsNum_not_eq?: InputMaybe<Scalars['Int']['input']>;
  followsNum_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isCensored_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCensored_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isCensored_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  language_endsWith?: InputMaybe<Scalars['String']['input']>;
  language_eq?: InputMaybe<Scalars['String']['input']>;
  language_gt?: InputMaybe<Scalars['String']['input']>;
  language_gte?: InputMaybe<Scalars['String']['input']>;
  language_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  language_lt?: InputMaybe<Scalars['String']['input']>;
  language_lte?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  language_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  language_not_eq?: InputMaybe<Scalars['String']['input']>;
  language_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  language_startsWith?: InputMaybe<Scalars['String']['input']>;
  ownerMember?: InputMaybe<MembershipWhereInput>;
  ownerMember_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  rewardAccount_contains?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_endsWith?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_eq?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_gt?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_gte?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardAccount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  rewardAccount_lt?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_lte?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_not_eq?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardAccount_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  rewardAccount_startsWith?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  title_endsWith?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  title_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  title_startsWith?: InputMaybe<Scalars['String']['input']>;
  totalVideosCreated_eq?: InputMaybe<Scalars['Int']['input']>;
  totalVideosCreated_gt?: InputMaybe<Scalars['Int']['input']>;
  totalVideosCreated_gte?: InputMaybe<Scalars['Int']['input']>;
  totalVideosCreated_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalVideosCreated_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalVideosCreated_lt?: InputMaybe<Scalars['Int']['input']>;
  totalVideosCreated_lte?: InputMaybe<Scalars['Int']['input']>;
  totalVideosCreated_not_eq?: InputMaybe<Scalars['Int']['input']>;
  totalVideosCreated_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  videoViewsNum_eq?: InputMaybe<Scalars['Int']['input']>;
  videoViewsNum_gt?: InputMaybe<Scalars['Int']['input']>;
  videoViewsNum_gte?: InputMaybe<Scalars['Int']['input']>;
  videoViewsNum_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  videoViewsNum_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  videoViewsNum_lt?: InputMaybe<Scalars['Int']['input']>;
  videoViewsNum_lte?: InputMaybe<Scalars['Int']['input']>;
  videoViewsNum_not_eq?: InputMaybe<Scalars['Int']['input']>;
  videoViewsNum_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  videos_every?: InputMaybe<VideoWhereInput>;
  videos_none?: InputMaybe<VideoWhereInput>;
  videos_some?: InputMaybe<VideoWhereInput>;
};

export type ChannelsConnection = {
  __typename?: 'ChannelsConnection';
  edges: Array<ChannelEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ChannelsSearchResult = {
  __typename?: 'ChannelsSearchResult';
  channel: Channel;
  relevance: Scalars['Int']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  /** Author of the video comment */
  author: Membership;
  /** Timestamp of the block the comment was created at */
  createdAt: Scalars['DateTime']['output'];
  /** METAPROTOCOL-{network}-{blockNumber}-{indexInBlock} */
  id: Scalars['String']['output'];
  /** Whether comment has been edited or not */
  isEdited: Scalars['Boolean']['output'];
  /** Whether a comment has been excluded/hidden (by the gateway operator) */
  isExcluded: Scalars['Boolean']['output'];
  /** A (parent) comment that this comment replies to (if any) */
  parentComment?: Maybe<Comment>;
  /** List of all reactions to the comment */
  reactions: Array<CommentReaction>;
  /** Sum of replies and reactions */
  reactionsAndRepliesCount: Scalars['Int']['output'];
  /** Total number of reactions to this comment */
  reactionsCount: Scalars['Int']['output'];
  /** Reactions count by reaction Id */
  reactionsCountByReactionId?: Maybe<Array<CommentReactionsCountByReactionId>>;
  /** How many comments has replied to this comment */
  repliesCount: Scalars['Int']['output'];
  /** Status of the comment; either it is visible, deleted, or moderated (deleted by moderator) */
  status: CommentStatus;
  /** Comment text */
  text: Scalars['String']['output'];
  /** Video the comment was added to */
  video: Video;
};


export type CommentReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionOrderByInput>>;
  where?: InputMaybe<CommentReactionWhereInput>;
};

export type CommentCreatedEventData = {
  __typename?: 'CommentCreatedEventData';
  /** The comment that was added */
  comment: Comment;
  /** Comment's original text */
  text: Scalars['String']['output'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export enum CommentOrderByInput {
  AuthorControllerAccountAsc = 'author_controllerAccount_ASC',
  AuthorControllerAccountDesc = 'author_controllerAccount_DESC',
  AuthorCreatedAtAsc = 'author_createdAt_ASC',
  AuthorCreatedAtDesc = 'author_createdAt_DESC',
  AuthorHandleAsc = 'author_handle_ASC',
  AuthorHandleDesc = 'author_handle_DESC',
  AuthorIdAsc = 'author_id_ASC',
  AuthorIdDesc = 'author_id_DESC',
  AuthorTotalChannelsCreatedAsc = 'author_totalChannelsCreated_ASC',
  AuthorTotalChannelsCreatedDesc = 'author_totalChannelsCreated_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsEditedAsc = 'isEdited_ASC',
  IsEditedDesc = 'isEdited_DESC',
  IsExcludedAsc = 'isExcluded_ASC',
  IsExcludedDesc = 'isExcluded_DESC',
  ParentCommentCreatedAtAsc = 'parentComment_createdAt_ASC',
  ParentCommentCreatedAtDesc = 'parentComment_createdAt_DESC',
  ParentCommentIdAsc = 'parentComment_id_ASC',
  ParentCommentIdDesc = 'parentComment_id_DESC',
  ParentCommentIsEditedAsc = 'parentComment_isEdited_ASC',
  ParentCommentIsEditedDesc = 'parentComment_isEdited_DESC',
  ParentCommentIsExcludedAsc = 'parentComment_isExcluded_ASC',
  ParentCommentIsExcludedDesc = 'parentComment_isExcluded_DESC',
  ParentCommentReactionsAndRepliesCountAsc = 'parentComment_reactionsAndRepliesCount_ASC',
  ParentCommentReactionsAndRepliesCountDesc = 'parentComment_reactionsAndRepliesCount_DESC',
  ParentCommentReactionsCountAsc = 'parentComment_reactionsCount_ASC',
  ParentCommentReactionsCountDesc = 'parentComment_reactionsCount_DESC',
  ParentCommentRepliesCountAsc = 'parentComment_repliesCount_ASC',
  ParentCommentRepliesCountDesc = 'parentComment_repliesCount_DESC',
  ParentCommentStatusAsc = 'parentComment_status_ASC',
  ParentCommentStatusDesc = 'parentComment_status_DESC',
  ParentCommentTextAsc = 'parentComment_text_ASC',
  ParentCommentTextDesc = 'parentComment_text_DESC',
  ReactionsAndRepliesCountAsc = 'reactionsAndRepliesCount_ASC',
  ReactionsAndRepliesCountDesc = 'reactionsAndRepliesCount_DESC',
  ReactionsCountAsc = 'reactionsCount_ASC',
  ReactionsCountDesc = 'reactionsCount_DESC',
  RepliesCountAsc = 'repliesCount_ASC',
  RepliesCountDesc = 'repliesCount_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type CommentReaction = {
  __typename?: 'CommentReaction';
  /** The comment that has been reacted to */
  comment: Comment;
  /** {memberId}-{commentId}-{reactionId} */
  id: Scalars['String']['output'];
  /** The member that reacted */
  member: Membership;
  /** The Reaction id */
  reactionId: Scalars['Int']['output'];
  /** The video the comment (that has been reacted) exists */
  video: Video;
};

export type CommentReactionEdge = {
  __typename?: 'CommentReactionEdge';
  cursor: Scalars['String']['output'];
  node: CommentReaction;
};

export enum CommentReactionOrderByInput {
  CommentCreatedAtAsc = 'comment_createdAt_ASC',
  CommentCreatedAtDesc = 'comment_createdAt_DESC',
  CommentIdAsc = 'comment_id_ASC',
  CommentIdDesc = 'comment_id_DESC',
  CommentIsEditedAsc = 'comment_isEdited_ASC',
  CommentIsEditedDesc = 'comment_isEdited_DESC',
  CommentIsExcludedAsc = 'comment_isExcluded_ASC',
  CommentIsExcludedDesc = 'comment_isExcluded_DESC',
  CommentReactionsAndRepliesCountAsc = 'comment_reactionsAndRepliesCount_ASC',
  CommentReactionsAndRepliesCountDesc = 'comment_reactionsAndRepliesCount_DESC',
  CommentReactionsCountAsc = 'comment_reactionsCount_ASC',
  CommentReactionsCountDesc = 'comment_reactionsCount_DESC',
  CommentRepliesCountAsc = 'comment_repliesCount_ASC',
  CommentRepliesCountDesc = 'comment_repliesCount_DESC',
  CommentStatusAsc = 'comment_status_ASC',
  CommentStatusDesc = 'comment_status_DESC',
  CommentTextAsc = 'comment_text_ASC',
  CommentTextDesc = 'comment_text_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberControllerAccountAsc = 'member_controllerAccount_ASC',
  MemberControllerAccountDesc = 'member_controllerAccount_DESC',
  MemberCreatedAtAsc = 'member_createdAt_ASC',
  MemberCreatedAtDesc = 'member_createdAt_DESC',
  MemberHandleAsc = 'member_handle_ASC',
  MemberHandleDesc = 'member_handle_DESC',
  MemberIdAsc = 'member_id_ASC',
  MemberIdDesc = 'member_id_DESC',
  MemberTotalChannelsCreatedAsc = 'member_totalChannelsCreated_ASC',
  MemberTotalChannelsCreatedDesc = 'member_totalChannelsCreated_DESC',
  ReactionIdAsc = 'reactionId_ASC',
  ReactionIdDesc = 'reactionId_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type CommentReactionWhereInput = {
  AND?: InputMaybe<Array<CommentReactionWhereInput>>;
  OR?: InputMaybe<Array<CommentReactionWhereInput>>;
  comment?: InputMaybe<CommentWhereInput>;
  comment_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionId_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionId_gt?: InputMaybe<Scalars['Int']['input']>;
  reactionId_gte?: InputMaybe<Scalars['Int']['input']>;
  reactionId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactionId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionId_lt?: InputMaybe<Scalars['Int']['input']>;
  reactionId_lte?: InputMaybe<Scalars['Int']['input']>;
  reactionId_not_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentReactionsConnection = {
  __typename?: 'CommentReactionsConnection';
  edges: Array<CommentReactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommentReactionsCountByReactionId = {
  __typename?: 'CommentReactionsCountByReactionId';
  /** No of times the comment has been reacted with given reaction Id */
  count: Scalars['Int']['output'];
  /** The reaction id */
  reactionId: Scalars['Int']['output'];
};

export enum CommentStatus {
  Deleted = 'DELETED',
  Moderated = 'MODERATED',
  Visible = 'VISIBLE'
}

export type CommentTextUpdatedEventData = {
  __typename?: 'CommentTextUpdatedEventData';
  /** The comment being updated */
  comment: Comment;
  /** New comment text */
  newText: Scalars['String']['output'];
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  author?: InputMaybe<MembershipWhereInput>;
  author_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isEdited_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isEdited_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  parentComment?: InputMaybe<CommentWhereInput>;
  parentComment_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionsAndRepliesCount_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionsAndRepliesCount_gt?: InputMaybe<Scalars['Int']['input']>;
  reactionsAndRepliesCount_gte?: InputMaybe<Scalars['Int']['input']>;
  reactionsAndRepliesCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactionsAndRepliesCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionsAndRepliesCount_lt?: InputMaybe<Scalars['Int']['input']>;
  reactionsAndRepliesCount_lte?: InputMaybe<Scalars['Int']['input']>;
  reactionsAndRepliesCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionsAndRepliesCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactionsCountByReactionId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionsCount_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactionsCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactions_every?: InputMaybe<CommentReactionWhereInput>;
  reactions_none?: InputMaybe<CommentReactionWhereInput>;
  reactions_some?: InputMaybe<CommentReactionWhereInput>;
  repliesCount_eq?: InputMaybe<Scalars['Int']['input']>;
  repliesCount_gt?: InputMaybe<Scalars['Int']['input']>;
  repliesCount_gte?: InputMaybe<Scalars['Int']['input']>;
  repliesCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  repliesCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  repliesCount_lt?: InputMaybe<Scalars['Int']['input']>;
  repliesCount_lte?: InputMaybe<Scalars['Int']['input']>;
  repliesCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  repliesCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  status_eq?: InputMaybe<CommentStatus>;
  status_in?: InputMaybe<Array<CommentStatus>>;
  status_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  status_not_eq?: InputMaybe<CommentStatus>;
  status_not_in?: InputMaybe<Array<CommentStatus>>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  text_endsWith?: InputMaybe<Scalars['String']['input']>;
  text_eq?: InputMaybe<Scalars['String']['input']>;
  text_gt?: InputMaybe<Scalars['String']['input']>;
  text_gte?: InputMaybe<Scalars['String']['input']>;
  text_in?: InputMaybe<Array<Scalars['String']['input']>>;
  text_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  text_lt?: InputMaybe<Scalars['String']['input']>;
  text_lte?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  text_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  text_not_eq?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  text_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  text_startsWith?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ContentActor = ContentActorCurator | ContentActorLead | ContentActorMember;

export type ContentActorCurator = {
  __typename?: 'ContentActorCurator';
  curator: Curator;
};

export type ContentActorLead = {
  __typename?: 'ContentActorLead';
  phantom?: Maybe<Scalars['Int']['output']>;
};

export type ContentActorMember = {
  __typename?: 'ContentActorMember';
  member: Membership;
};

export type ContentActorWhereInput = {
  curator?: InputMaybe<CuratorWhereInput>;
  curator_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_gt?: InputMaybe<Scalars['Int']['input']>;
  phantom_gte?: InputMaybe<Scalars['Int']['input']>;
  phantom_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  phantom_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_lt?: InputMaybe<Scalars['Int']['input']>;
  phantom_lte?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum Continent {
  Af = 'AF',
  An = 'AN',
  As = 'AS',
  Eu = 'EU',
  Na = 'NA',
  Oc = 'OC',
  Sa = 'SA'
}

export type Curator = {
  __typename?: 'Curator';
  /** Runtime identifier */
  id: Scalars['String']['output'];
};

export type CuratorEdge = {
  __typename?: 'CuratorEdge';
  cursor: Scalars['String']['output'];
  node: Curator;
};

export type CuratorGroup = {
  __typename?: 'CuratorGroup';
  /** Runtime identifier */
  id: Scalars['String']['output'];
  /** Is group active or not */
  isActive: Scalars['Boolean']['output'];
};

export type CuratorGroupEdge = {
  __typename?: 'CuratorGroupEdge';
  cursor: Scalars['String']['output'];
  node: CuratorGroup;
};

export enum CuratorGroupOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC'
}

export type CuratorGroupWhereInput = {
  AND?: InputMaybe<Array<CuratorGroupWhereInput>>;
  OR?: InputMaybe<Array<CuratorGroupWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isActive_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CuratorGroupsConnection = {
  __typename?: 'CuratorGroupsConnection';
  edges: Array<CuratorGroupEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum CuratorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CuratorWhereInput = {
  AND?: InputMaybe<Array<CuratorWhereInput>>;
  OR?: InputMaybe<Array<CuratorWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type CuratorsConnection = {
  __typename?: 'CuratorsConnection';
  edges: Array<CuratorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DataObjectType = DataObjectTypeChannelAvatar | DataObjectTypeChannelCoverPhoto | DataObjectTypeChannelPayoutsPayload | DataObjectTypeVideoMedia | DataObjectTypeVideoSubtitle | DataObjectTypeVideoThumbnail;

export type DataObjectTypeChannelAvatar = {
  __typename?: 'DataObjectTypeChannelAvatar';
  /** Related channel entity */
  channel: Channel;
};

export type DataObjectTypeChannelCoverPhoto = {
  __typename?: 'DataObjectTypeChannelCoverPhoto';
  /** Related channel entity */
  channel: Channel;
};

export type DataObjectTypeChannelPayoutsPayload = {
  __typename?: 'DataObjectTypeChannelPayoutsPayload';
  phantom?: Maybe<Scalars['Int']['output']>;
};

export type DataObjectTypeVideoMedia = {
  __typename?: 'DataObjectTypeVideoMedia';
  /** Related video entity */
  video: Video;
};

export type DataObjectTypeVideoSubtitle = {
  __typename?: 'DataObjectTypeVideoSubtitle';
  /** Related subtitle entity */
  subtitle: VideoSubtitle;
  /** Related video entity */
  video: Video;
};

export type DataObjectTypeVideoThumbnail = {
  __typename?: 'DataObjectTypeVideoThumbnail';
  /** Related video entity */
  video: Video;
};

export type DataObjectTypeWhereInput = {
  channel?: InputMaybe<ChannelWhereInput>;
  channel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  phantom_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_gt?: InputMaybe<Scalars['Int']['input']>;
  phantom_gte?: InputMaybe<Scalars['Int']['input']>;
  phantom_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  phantom_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_lt?: InputMaybe<Scalars['Int']['input']>;
  phantom_lte?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  subtitle?: InputMaybe<VideoSubtitleWhereInput>;
  subtitle_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DistributionBucket = {
  __typename?: 'DistributionBucket';
  /** Whether the bucket is accepting any new bags */
  acceptingNewBags: Scalars['Boolean']['output'];
  /** Storage bags assigned to the bucket */
  bags: Array<DistributionBucketBag>;
  /** Bucket index within the family */
  bucketIndex: Scalars['Int']['output'];
  /** Whether the bucket is currently distributing content */
  distributing: Scalars['Boolean']['output'];
  /** Distribution family the bucket is part of */
  family: DistributionBucketFamily;
  /** Runtime bucket id in {familyId}:{bucketIndex} format */
  id: Scalars['String']['output'];
  /** Distribution bucket operators (either active or invited) */
  operators: Array<DistributionBucketOperator>;
};


export type DistributionBucketBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketBagOrderByInput>>;
  where?: InputMaybe<DistributionBucketBagWhereInput>;
};


export type DistributionBucketOperatorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOperatorOrderByInput>>;
  where?: InputMaybe<DistributionBucketOperatorWhereInput>;
};

export type DistributionBucketBag = {
  __typename?: 'DistributionBucketBag';
  bag: StorageBag;
  distributionBucket: DistributionBucket;
  /** {distributionBucketId}-{storageBagId} */
  id: Scalars['String']['output'];
};

export type DistributionBucketBagEdge = {
  __typename?: 'DistributionBucketBagEdge';
  cursor: Scalars['String']['output'];
  node: DistributionBucketBag;
};

export enum DistributionBucketBagOrderByInput {
  BagIdAsc = 'bag_id_ASC',
  BagIdDesc = 'bag_id_DESC',
  DistributionBucketAcceptingNewBagsAsc = 'distributionBucket_acceptingNewBags_ASC',
  DistributionBucketAcceptingNewBagsDesc = 'distributionBucket_acceptingNewBags_DESC',
  DistributionBucketBucketIndexAsc = 'distributionBucket_bucketIndex_ASC',
  DistributionBucketBucketIndexDesc = 'distributionBucket_bucketIndex_DESC',
  DistributionBucketDistributingAsc = 'distributionBucket_distributing_ASC',
  DistributionBucketDistributingDesc = 'distributionBucket_distributing_DESC',
  DistributionBucketIdAsc = 'distributionBucket_id_ASC',
  DistributionBucketIdDesc = 'distributionBucket_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type DistributionBucketBagWhereInput = {
  AND?: InputMaybe<Array<DistributionBucketBagWhereInput>>;
  OR?: InputMaybe<Array<DistributionBucketBagWhereInput>>;
  bag?: InputMaybe<StorageBagWhereInput>;
  bag_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  distributionBucket?: InputMaybe<DistributionBucketWhereInput>;
  distributionBucket_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type DistributionBucketBagsConnection = {
  __typename?: 'DistributionBucketBagsConnection';
  edges: Array<DistributionBucketBagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DistributionBucketEdge = {
  __typename?: 'DistributionBucketEdge';
  cursor: Scalars['String']['output'];
  node: DistributionBucket;
};

export type DistributionBucketFamiliesConnection = {
  __typename?: 'DistributionBucketFamiliesConnection';
  edges: Array<DistributionBucketFamilyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DistributionBucketFamily = {
  __typename?: 'DistributionBucketFamily';
  /** Distribution buckets belonging to the family */
  buckets: Array<DistributionBucket>;
  /** Runtime bucket family id */
  id: Scalars['String']['output'];
  /** Current bucket family metadata */
  metadata?: Maybe<DistributionBucketFamilyMetadata>;
};


export type DistributionBucketFamilyBucketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOrderByInput>>;
  where?: InputMaybe<DistributionBucketWhereInput>;
};

export type DistributionBucketFamilyEdge = {
  __typename?: 'DistributionBucketFamilyEdge';
  cursor: Scalars['String']['output'];
  node: DistributionBucketFamily;
};

export type DistributionBucketFamilyMetadata = {
  __typename?: 'DistributionBucketFamilyMetadata';
  /** Geographical areas covered by the family */
  areas?: Maybe<Array<GeographicalArea>>;
  /** Optional, more specific description of the region covered by the family */
  description?: Maybe<Scalars['String']['output']>;
  /** Distribution bucket family */
  family: DistributionBucketFamily;
  id: Scalars['String']['output'];
  /** List of targets (hosts/ips) best suited latency measurements for the family */
  latencyTestTargets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Name of the geographical region covered by the family (ie.: us-east-1) */
  region?: Maybe<Scalars['String']['output']>;
};

export type DistributionBucketFamilyMetadataConnection = {
  __typename?: 'DistributionBucketFamilyMetadataConnection';
  edges: Array<DistributionBucketFamilyMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DistributionBucketFamilyMetadataEdge = {
  __typename?: 'DistributionBucketFamilyMetadataEdge';
  cursor: Scalars['String']['output'];
  node: DistributionBucketFamilyMetadata;
};

export enum DistributionBucketFamilyMetadataOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FamilyIdAsc = 'family_id_ASC',
  FamilyIdDesc = 'family_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RegionAsc = 'region_ASC',
  RegionDesc = 'region_DESC'
}

export type DistributionBucketFamilyMetadataWhereInput = {
  AND?: InputMaybe<Array<DistributionBucketFamilyMetadataWhereInput>>;
  OR?: InputMaybe<Array<DistributionBucketFamilyMetadataWhereInput>>;
  areas_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_eq?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_not_eq?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  description_startsWith?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<DistributionBucketFamilyWhereInput>;
  family_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  latencyTestTargets_containsAll?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  latencyTestTargets_containsAny?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  latencyTestTargets_containsNone?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  latencyTestTargets_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  region_contains?: InputMaybe<Scalars['String']['input']>;
  region_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  region_endsWith?: InputMaybe<Scalars['String']['input']>;
  region_eq?: InputMaybe<Scalars['String']['input']>;
  region_gt?: InputMaybe<Scalars['String']['input']>;
  region_gte?: InputMaybe<Scalars['String']['input']>;
  region_in?: InputMaybe<Array<Scalars['String']['input']>>;
  region_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  region_lt?: InputMaybe<Scalars['String']['input']>;
  region_lte?: InputMaybe<Scalars['String']['input']>;
  region_not_contains?: InputMaybe<Scalars['String']['input']>;
  region_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  region_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  region_not_eq?: InputMaybe<Scalars['String']['input']>;
  region_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  region_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  region_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum DistributionBucketFamilyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataDescriptionAsc = 'metadata_description_ASC',
  MetadataDescriptionDesc = 'metadata_description_DESC',
  MetadataIdAsc = 'metadata_id_ASC',
  MetadataIdDesc = 'metadata_id_DESC',
  MetadataRegionAsc = 'metadata_region_ASC',
  MetadataRegionDesc = 'metadata_region_DESC'
}

export type DistributionBucketFamilyWhereInput = {
  AND?: InputMaybe<Array<DistributionBucketFamilyWhereInput>>;
  OR?: InputMaybe<Array<DistributionBucketFamilyWhereInput>>;
  buckets_every?: InputMaybe<DistributionBucketWhereInput>;
  buckets_none?: InputMaybe<DistributionBucketWhereInput>;
  buckets_some?: InputMaybe<DistributionBucketWhereInput>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<DistributionBucketFamilyMetadataWhereInput>;
  metadata_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DistributionBucketOperator = {
  __typename?: 'DistributionBucketOperator';
  /** Related distirbution bucket */
  distributionBucket: DistributionBucket;
  /** {bucketId}-{workerId} */
  id: Scalars['String']['output'];
  /** Operator metadata */
  metadata?: Maybe<DistributionBucketOperatorMetadata>;
  /** Current operator status */
  status: DistributionBucketOperatorStatus;
  /** ID of the distribution group worker */
  workerId: Scalars['Int']['output'];
};

export type DistributionBucketOperatorEdge = {
  __typename?: 'DistributionBucketOperatorEdge';
  cursor: Scalars['String']['output'];
  node: DistributionBucketOperator;
};

export type DistributionBucketOperatorMetadata = {
  __typename?: 'DistributionBucketOperatorMetadata';
  /** Distribution bucket operator */
  distirbutionBucketOperator: DistributionBucketOperator;
  /** Additional information about the node/operator */
  extra?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Root distributor node api endpoint */
  nodeEndpoint?: Maybe<Scalars['String']['output']>;
  /** Optional node location metadata */
  nodeLocation?: Maybe<NodeLocationMetadata>;
};

export type DistributionBucketOperatorMetadataConnection = {
  __typename?: 'DistributionBucketOperatorMetadataConnection';
  edges: Array<DistributionBucketOperatorMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DistributionBucketOperatorMetadataEdge = {
  __typename?: 'DistributionBucketOperatorMetadataEdge';
  cursor: Scalars['String']['output'];
  node: DistributionBucketOperatorMetadata;
};

export enum DistributionBucketOperatorMetadataOrderByInput {
  DistirbutionBucketOperatorIdAsc = 'distirbutionBucketOperator_id_ASC',
  DistirbutionBucketOperatorIdDesc = 'distirbutionBucketOperator_id_DESC',
  DistirbutionBucketOperatorStatusAsc = 'distirbutionBucketOperator_status_ASC',
  DistirbutionBucketOperatorStatusDesc = 'distirbutionBucketOperator_status_DESC',
  DistirbutionBucketOperatorWorkerIdAsc = 'distirbutionBucketOperator_workerId_ASC',
  DistirbutionBucketOperatorWorkerIdDesc = 'distirbutionBucketOperator_workerId_DESC',
  ExtraAsc = 'extra_ASC',
  ExtraDesc = 'extra_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NodeEndpointAsc = 'nodeEndpoint_ASC',
  NodeEndpointDesc = 'nodeEndpoint_DESC',
  NodeLocationCityAsc = 'nodeLocation_city_ASC',
  NodeLocationCityDesc = 'nodeLocation_city_DESC',
  NodeLocationCountryCodeAsc = 'nodeLocation_countryCode_ASC',
  NodeLocationCountryCodeDesc = 'nodeLocation_countryCode_DESC'
}

export type DistributionBucketOperatorMetadataWhereInput = {
  AND?: InputMaybe<Array<DistributionBucketOperatorMetadataWhereInput>>;
  OR?: InputMaybe<Array<DistributionBucketOperatorMetadataWhereInput>>;
  distirbutionBucketOperator?: InputMaybe<DistributionBucketOperatorWhereInput>;
  distirbutionBucketOperator_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  extra_contains?: InputMaybe<Scalars['String']['input']>;
  extra_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  extra_endsWith?: InputMaybe<Scalars['String']['input']>;
  extra_eq?: InputMaybe<Scalars['String']['input']>;
  extra_gt?: InputMaybe<Scalars['String']['input']>;
  extra_gte?: InputMaybe<Scalars['String']['input']>;
  extra_in?: InputMaybe<Array<Scalars['String']['input']>>;
  extra_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  extra_lt?: InputMaybe<Scalars['String']['input']>;
  extra_lte?: InputMaybe<Scalars['String']['input']>;
  extra_not_contains?: InputMaybe<Scalars['String']['input']>;
  extra_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  extra_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  extra_not_eq?: InputMaybe<Scalars['String']['input']>;
  extra_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  extra_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  extra_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_contains?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_endsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_eq?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_gt?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_gte?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeEndpoint_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  nodeEndpoint_lt?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_lte?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_contains?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_eq?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeEndpoint_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_startsWith?: InputMaybe<Scalars['String']['input']>;
  nodeLocation?: InputMaybe<NodeLocationMetadataWhereInput>;
  nodeLocation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DistributionBucketOperatorOrderByInput {
  DistributionBucketAcceptingNewBagsAsc = 'distributionBucket_acceptingNewBags_ASC',
  DistributionBucketAcceptingNewBagsDesc = 'distributionBucket_acceptingNewBags_DESC',
  DistributionBucketBucketIndexAsc = 'distributionBucket_bucketIndex_ASC',
  DistributionBucketBucketIndexDesc = 'distributionBucket_bucketIndex_DESC',
  DistributionBucketDistributingAsc = 'distributionBucket_distributing_ASC',
  DistributionBucketDistributingDesc = 'distributionBucket_distributing_DESC',
  DistributionBucketIdAsc = 'distributionBucket_id_ASC',
  DistributionBucketIdDesc = 'distributionBucket_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataExtraAsc = 'metadata_extra_ASC',
  MetadataExtraDesc = 'metadata_extra_DESC',
  MetadataIdAsc = 'metadata_id_ASC',
  MetadataIdDesc = 'metadata_id_DESC',
  MetadataNodeEndpointAsc = 'metadata_nodeEndpoint_ASC',
  MetadataNodeEndpointDesc = 'metadata_nodeEndpoint_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  WorkerIdAsc = 'workerId_ASC',
  WorkerIdDesc = 'workerId_DESC'
}

export enum DistributionBucketOperatorStatus {
  Active = 'ACTIVE',
  Invited = 'INVITED'
}

export type DistributionBucketOperatorWhereInput = {
  AND?: InputMaybe<Array<DistributionBucketOperatorWhereInput>>;
  OR?: InputMaybe<Array<DistributionBucketOperatorWhereInput>>;
  distributionBucket?: InputMaybe<DistributionBucketWhereInput>;
  distributionBucket_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<DistributionBucketOperatorMetadataWhereInput>;
  metadata_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  status_eq?: InputMaybe<DistributionBucketOperatorStatus>;
  status_in?: InputMaybe<Array<DistributionBucketOperatorStatus>>;
  status_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  status_not_eq?: InputMaybe<DistributionBucketOperatorStatus>;
  status_not_in?: InputMaybe<Array<DistributionBucketOperatorStatus>>;
  workerId_eq?: InputMaybe<Scalars['Int']['input']>;
  workerId_gt?: InputMaybe<Scalars['Int']['input']>;
  workerId_gte?: InputMaybe<Scalars['Int']['input']>;
  workerId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workerId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  workerId_lt?: InputMaybe<Scalars['Int']['input']>;
  workerId_lte?: InputMaybe<Scalars['Int']['input']>;
  workerId_not_eq?: InputMaybe<Scalars['Int']['input']>;
  workerId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type DistributionBucketOperatorsConnection = {
  __typename?: 'DistributionBucketOperatorsConnection';
  edges: Array<DistributionBucketOperatorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum DistributionBucketOrderByInput {
  AcceptingNewBagsAsc = 'acceptingNewBags_ASC',
  AcceptingNewBagsDesc = 'acceptingNewBags_DESC',
  BucketIndexAsc = 'bucketIndex_ASC',
  BucketIndexDesc = 'bucketIndex_DESC',
  DistributingAsc = 'distributing_ASC',
  DistributingDesc = 'distributing_DESC',
  FamilyIdAsc = 'family_id_ASC',
  FamilyIdDesc = 'family_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type DistributionBucketWhereInput = {
  AND?: InputMaybe<Array<DistributionBucketWhereInput>>;
  OR?: InputMaybe<Array<DistributionBucketWhereInput>>;
  acceptingNewBags_eq?: InputMaybe<Scalars['Boolean']['input']>;
  acceptingNewBags_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  acceptingNewBags_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  bags_every?: InputMaybe<DistributionBucketBagWhereInput>;
  bags_none?: InputMaybe<DistributionBucketBagWhereInput>;
  bags_some?: InputMaybe<DistributionBucketBagWhereInput>;
  bucketIndex_eq?: InputMaybe<Scalars['Int']['input']>;
  bucketIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  bucketIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  bucketIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  bucketIndex_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  bucketIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  bucketIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  bucketIndex_not_eq?: InputMaybe<Scalars['Int']['input']>;
  bucketIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributing_eq?: InputMaybe<Scalars['Boolean']['input']>;
  distributing_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  distributing_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  family?: InputMaybe<DistributionBucketFamilyWhereInput>;
  family_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  operators_every?: InputMaybe<DistributionBucketOperatorWhereInput>;
  operators_none?: InputMaybe<DistributionBucketOperatorWhereInput>;
  operators_some?: InputMaybe<DistributionBucketOperatorWhereInput>;
};

export type DistributionBucketsConnection = {
  __typename?: 'DistributionBucketsConnection';
  edges: Array<DistributionBucketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EnglishAuctionSettledEventData = {
  __typename?: 'EnglishAuctionSettledEventData';
  /** NFT owner before the english auction was settled */
  previousNftOwner: NftOwner;
  /** English auction winning bid */
  winningBid: Bid;
};

export type EnglishAuctionStartedEventData = {
  __typename?: 'EnglishAuctionStartedEventData';
  /** Actor that started this auction. */
  actor: ContentActor;
  /** Auction started. */
  auction: Auction;
  /** Nft owner at the time it was put on an auction. */
  nftOwner: NftOwner;
};

export type EntityReportInfo = {
  __typename?: 'EntityReportInfo';
  created: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  rationale: Scalars['String']['output'];
  reporterIp: Scalars['String']['output'];
};

export type Event = {
  __typename?: 'Event';
  /** More specific event data, which depends on event type */
  data: EventData;
  /** {blockNumber}-{indexInBlock} */
  id: Scalars['String']['output'];
  /** Blocknumber of the block in which the event was emitted. */
  inBlock: Scalars['Int']['output'];
  /** Hash of the extrinsic the event was emitted in */
  inExtrinsic?: Maybe<Scalars['String']['output']>;
  /** Index of event in block from which it was emitted. */
  indexInBlock: Scalars['Int']['output'];
  /** Timestamp of the block the event was emitted in */
  timestamp: Scalars['DateTime']['output'];
};

export type EventData = AuctionBidCanceledEventData | AuctionBidMadeEventData | AuctionCanceledEventData | BidMadeCompletingAuctionEventData | BuyNowCanceledEventData | BuyNowPriceUpdatedEventData | ChannelFundsWithdrawnEventData | ChannelPaymentMadeEventData | ChannelPayoutsUpdatedEventData | ChannelRewardClaimedAndWithdrawnEventData | ChannelRewardClaimedEventData | CommentCreatedEventData | CommentTextUpdatedEventData | EnglishAuctionSettledEventData | EnglishAuctionStartedEventData | MemberBannedFromChannelEventData | MetaprotocolTransactionStatusEventData | NftBoughtEventData | NftIssuedEventData | NftSellOrderMadeEventData | OpenAuctionBidAcceptedEventData | OpenAuctionStartedEventData;

export type EventDataWhereInput = {
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  action_eq?: InputMaybe<Scalars['Boolean']['input']>;
  action_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  action_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  actor?: InputMaybe<ContentActorWhereInput>;
  actor_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  auction?: InputMaybe<AuctionWhereInput>;
  auction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  bid?: InputMaybe<BidWhereInput>;
  bid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  buyer?: InputMaybe<MembershipWhereInput>;
  buyer_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  channel?: InputMaybe<ChannelWhereInput>;
  channelCashoutsEnabled_eq?: InputMaybe<Scalars['Boolean']['input']>;
  channelCashoutsEnabled_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  channelCashoutsEnabled_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  channel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<CommentWhereInput>;
  comment_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commitment_contains?: InputMaybe<Scalars['String']['input']>;
  commitment_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  commitment_endsWith?: InputMaybe<Scalars['String']['input']>;
  commitment_eq?: InputMaybe<Scalars['String']['input']>;
  commitment_gt?: InputMaybe<Scalars['String']['input']>;
  commitment_gte?: InputMaybe<Scalars['String']['input']>;
  commitment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  commitment_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commitment_lt?: InputMaybe<Scalars['String']['input']>;
  commitment_lte?: InputMaybe<Scalars['String']['input']>;
  commitment_not_contains?: InputMaybe<Scalars['String']['input']>;
  commitment_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  commitment_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  commitment_not_eq?: InputMaybe<Scalars['String']['input']>;
  commitment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  commitment_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  commitment_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  maxCashoutAllowed_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxCashoutAllowed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxCashoutAllowed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxCashoutAllowed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxCashoutAllowed_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  maxCashoutAllowed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxCashoutAllowed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxCashoutAllowed_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  maxCashoutAllowed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minCashoutAllowed_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCashoutAllowed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minCashoutAllowed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minCashoutAllowed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minCashoutAllowed_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  minCashoutAllowed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minCashoutAllowed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minCashoutAllowed_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  minCashoutAllowed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  newPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newText_contains?: InputMaybe<Scalars['String']['input']>;
  newText_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  newText_endsWith?: InputMaybe<Scalars['String']['input']>;
  newText_eq?: InputMaybe<Scalars['String']['input']>;
  newText_gt?: InputMaybe<Scalars['String']['input']>;
  newText_gte?: InputMaybe<Scalars['String']['input']>;
  newText_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newText_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  newText_lt?: InputMaybe<Scalars['String']['input']>;
  newText_lte?: InputMaybe<Scalars['String']['input']>;
  newText_not_contains?: InputMaybe<Scalars['String']['input']>;
  newText_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  newText_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  newText_not_eq?: InputMaybe<Scalars['String']['input']>;
  newText_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newText_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  newText_startsWith?: InputMaybe<Scalars['String']['input']>;
  nft?: InputMaybe<OwnedNftWhereInput>;
  nftOwner?: InputMaybe<NftOwnerWhereInput>;
  nftOwner_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  nft_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  payeeChannel?: InputMaybe<ChannelWhereInput>;
  payeeChannel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  payer?: InputMaybe<MembershipWhereInput>;
  payer_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  payloadDataObject?: InputMaybe<StorageDataObjectWhereInput>;
  payloadDataObject_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  paymentContext?: InputMaybe<PaymentContextWhereInput>;
  paymentContext_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  previousNftOwner?: InputMaybe<NftOwnerWhereInput>;
  previousNftOwner_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price_eq?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rationale_contains?: InputMaybe<Scalars['String']['input']>;
  rationale_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rationale_endsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_eq?: InputMaybe<Scalars['String']['input']>;
  rationale_gt?: InputMaybe<Scalars['String']['input']>;
  rationale_gte?: InputMaybe<Scalars['String']['input']>;
  rationale_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rationale_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  rationale_lt?: InputMaybe<Scalars['String']['input']>;
  rationale_lte?: InputMaybe<Scalars['String']['input']>;
  rationale_not_contains?: InputMaybe<Scalars['String']['input']>;
  rationale_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rationale_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_not_eq?: InputMaybe<Scalars['String']['input']>;
  rationale_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rationale_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_startsWith?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<MetaprotocolTransactionResultWhereInput>;
  result_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  text_endsWith?: InputMaybe<Scalars['String']['input']>;
  text_eq?: InputMaybe<Scalars['String']['input']>;
  text_gt?: InputMaybe<Scalars['String']['input']>;
  text_gte?: InputMaybe<Scalars['String']['input']>;
  text_in?: InputMaybe<Array<Scalars['String']['input']>>;
  text_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  text_lt?: InputMaybe<Scalars['String']['input']>;
  text_lte?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  text_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  text_not_eq?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  text_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  text_startsWith?: InputMaybe<Scalars['String']['input']>;
  winningBid?: InputMaybe<BidWhereInput>;
  winningBid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export enum EventOrderByInput {
  DataAccountAsc = 'data_account_ASC',
  DataAccountDesc = 'data_account_DESC',
  DataActionAsc = 'data_action_ASC',
  DataActionDesc = 'data_action_DESC',
  DataAmountAsc = 'data_amount_ASC',
  DataAmountDesc = 'data_amount_DESC',
  DataChannelCashoutsEnabledAsc = 'data_channelCashoutsEnabled_ASC',
  DataChannelCashoutsEnabledDesc = 'data_channelCashoutsEnabled_DESC',
  DataCommitmentAsc = 'data_commitment_ASC',
  DataCommitmentDesc = 'data_commitment_DESC',
  DataIsTypeOfAsc = 'data_isTypeOf_ASC',
  DataIsTypeOfDesc = 'data_isTypeOf_DESC',
  DataMaxCashoutAllowedAsc = 'data_maxCashoutAllowed_ASC',
  DataMaxCashoutAllowedDesc = 'data_maxCashoutAllowed_DESC',
  DataMinCashoutAllowedAsc = 'data_minCashoutAllowed_ASC',
  DataMinCashoutAllowedDesc = 'data_minCashoutAllowed_DESC',
  DataNewPriceAsc = 'data_newPrice_ASC',
  DataNewPriceDesc = 'data_newPrice_DESC',
  DataNewTextAsc = 'data_newText_ASC',
  DataNewTextDesc = 'data_newText_DESC',
  DataPriceAsc = 'data_price_ASC',
  DataPriceDesc = 'data_price_DESC',
  DataRationaleAsc = 'data_rationale_ASC',
  DataRationaleDesc = 'data_rationale_DESC',
  DataTextAsc = 'data_text_ASC',
  DataTextDesc = 'data_text_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  data?: InputMaybe<EventDataWhereInput>;
  data_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  inBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  inBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  inBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  inBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  inBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  inBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  inBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  inBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inExtrinsic_contains?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_eq?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_gt?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_gte?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']['input']>>;
  inExtrinsic_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  inExtrinsic_lt?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_lte?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_not_contains?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_not_eq?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  inExtrinsic_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']['input']>;
  indexInBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexInBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  indexInBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  indexInBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum ExcludableContentType {
  Channel = 'Channel',
  Comment = 'Comment',
  Video = 'Video'
}

export type ExcludeContentResult = {
  __typename?: 'ExcludeContentResult';
  numberOfEntitiesAffected: Scalars['Int']['output'];
};

export type ExtendedChannel = {
  __typename?: 'ExtendedChannel';
  activeVideosCount: Scalars['Int']['output'];
  channel: Channel;
};

export type ExtendedChannelWhereInput = {
  activeVideosCount_gt?: InputMaybe<Scalars['Int']['input']>;
  channel?: InputMaybe<ChannelWhereInput>;
};

export type ExtendedVideoCategory = {
  __typename?: 'ExtendedVideoCategory';
  activeVideosCount: Scalars['Int']['output'];
  category: VideoCategory;
};

export type FeaturedVideoInput = {
  videoCutUrl?: InputMaybe<Scalars['String']['input']>;
  videoId: Scalars['String']['input'];
};

export type GeneratedSignature = {
  __typename?: 'GeneratedSignature';
  /** App signature converted to hexadecimal string. */
  signature: Scalars['String']['output'];
};

export type GeoCoordinates = {
  __typename?: 'GeoCoordinates';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type GeoCoordinatesWhereInput = {
  latitude_eq?: InputMaybe<Scalars['Float']['input']>;
  latitude_gt?: InputMaybe<Scalars['Float']['input']>;
  latitude_gte?: InputMaybe<Scalars['Float']['input']>;
  latitude_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  latitude_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  latitude_lt?: InputMaybe<Scalars['Float']['input']>;
  latitude_lte?: InputMaybe<Scalars['Float']['input']>;
  latitude_not_eq?: InputMaybe<Scalars['Float']['input']>;
  latitude_not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  longitude_eq?: InputMaybe<Scalars['Float']['input']>;
  longitude_gt?: InputMaybe<Scalars['Float']['input']>;
  longitude_gte?: InputMaybe<Scalars['Float']['input']>;
  longitude_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  longitude_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  longitude_lt?: InputMaybe<Scalars['Float']['input']>;
  longitude_lte?: InputMaybe<Scalars['Float']['input']>;
  longitude_not_eq?: InputMaybe<Scalars['Float']['input']>;
  longitude_not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type GeographicalArea = GeographicalAreaContinent | GeographicalAreaCountry | GeographicalAreaSubdivistion;

export type GeographicalAreaContinent = {
  __typename?: 'GeographicalAreaContinent';
  continentCode?: Maybe<Continent>;
};

export type GeographicalAreaCountry = {
  __typename?: 'GeographicalAreaCountry';
  /** ISO 3166-1 alpha-2 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
};

export type GeographicalAreaSubdivistion = {
  __typename?: 'GeographicalAreaSubdivistion';
  /** ISO 3166-2 subdivision code */
  subdivisionCode?: Maybe<Scalars['String']['output']>;
};

export type KillSwitch = {
  __typename?: 'KillSwitch';
  isKilled: Scalars['Boolean']['output'];
};

export type License = {
  __typename?: 'License';
  /** Attribution (if required by the license) */
  attribution?: Maybe<Scalars['String']['output']>;
  /** License code defined by Joystream */
  code?: Maybe<Scalars['Int']['output']>;
  /** Custom license content */
  customText?: Maybe<Scalars['String']['output']>;
  /** Unique identifier */
  id: Scalars['String']['output'];
};

export type LicenseEdge = {
  __typename?: 'LicenseEdge';
  cursor: Scalars['String']['output'];
  node: License;
};

export enum LicenseOrderByInput {
  AttributionAsc = 'attribution_ASC',
  AttributionDesc = 'attribution_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CustomTextAsc = 'customText_ASC',
  CustomTextDesc = 'customText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type LicenseWhereInput = {
  AND?: InputMaybe<Array<LicenseWhereInput>>;
  OR?: InputMaybe<Array<LicenseWhereInput>>;
  attribution_contains?: InputMaybe<Scalars['String']['input']>;
  attribution_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  attribution_endsWith?: InputMaybe<Scalars['String']['input']>;
  attribution_eq?: InputMaybe<Scalars['String']['input']>;
  attribution_gt?: InputMaybe<Scalars['String']['input']>;
  attribution_gte?: InputMaybe<Scalars['String']['input']>;
  attribution_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attribution_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  attribution_lt?: InputMaybe<Scalars['String']['input']>;
  attribution_lte?: InputMaybe<Scalars['String']['input']>;
  attribution_not_contains?: InputMaybe<Scalars['String']['input']>;
  attribution_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  attribution_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  attribution_not_eq?: InputMaybe<Scalars['String']['input']>;
  attribution_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attribution_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  attribution_startsWith?: InputMaybe<Scalars['String']['input']>;
  code_eq?: InputMaybe<Scalars['Int']['input']>;
  code_gt?: InputMaybe<Scalars['Int']['input']>;
  code_gte?: InputMaybe<Scalars['Int']['input']>;
  code_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  code_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  code_lt?: InputMaybe<Scalars['Int']['input']>;
  code_lte?: InputMaybe<Scalars['Int']['input']>;
  code_not_eq?: InputMaybe<Scalars['Int']['input']>;
  code_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  customText_contains?: InputMaybe<Scalars['String']['input']>;
  customText_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  customText_endsWith?: InputMaybe<Scalars['String']['input']>;
  customText_eq?: InputMaybe<Scalars['String']['input']>;
  customText_gt?: InputMaybe<Scalars['String']['input']>;
  customText_gte?: InputMaybe<Scalars['String']['input']>;
  customText_in?: InputMaybe<Array<Scalars['String']['input']>>;
  customText_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  customText_lt?: InputMaybe<Scalars['String']['input']>;
  customText_lte?: InputMaybe<Scalars['String']['input']>;
  customText_not_contains?: InputMaybe<Scalars['String']['input']>;
  customText_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  customText_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  customText_not_eq?: InputMaybe<Scalars['String']['input']>;
  customText_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  customText_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  customText_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type LicensesConnection = {
  __typename?: 'LicensesConnection';
  edges: Array<LicenseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberBannedFromChannelEventData = {
  __typename?: 'MemberBannedFromChannelEventData';
  /** The action performed. TRUE if the member is being banned, FALSE if the member is being unbanned */
  action: Scalars['Boolean']['output'];
  /** The chanel the member is being banned / unbanned from */
  channel: Channel;
  /** The member being banned / unbanned */
  member: Membership;
};

export type MemberMetadata = {
  __typename?: 'MemberMetadata';
  /** Short text chosen by member to share information about themselves */
  about?: Maybe<Scalars['String']['output']>;
  /** Avatar data object */
  avatar?: Maybe<Avatar>;
  id: Scalars['String']['output'];
  member: Membership;
  /** Member's name */
  name?: Maybe<Scalars['String']['output']>;
};

export type MemberMetadataConnection = {
  __typename?: 'MemberMetadataConnection';
  edges: Array<MemberMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberMetadataEdge = {
  __typename?: 'MemberMetadataEdge';
  cursor: Scalars['String']['output'];
  node: MemberMetadata;
};

export enum MemberMetadataOrderByInput {
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  AvatarAvatarUriAsc = 'avatar_avatarUri_ASC',
  AvatarAvatarUriDesc = 'avatar_avatarUri_DESC',
  AvatarIsTypeOfAsc = 'avatar_isTypeOf_ASC',
  AvatarIsTypeOfDesc = 'avatar_isTypeOf_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberControllerAccountAsc = 'member_controllerAccount_ASC',
  MemberControllerAccountDesc = 'member_controllerAccount_DESC',
  MemberCreatedAtAsc = 'member_createdAt_ASC',
  MemberCreatedAtDesc = 'member_createdAt_DESC',
  MemberHandleAsc = 'member_handle_ASC',
  MemberHandleDesc = 'member_handle_DESC',
  MemberIdAsc = 'member_id_ASC',
  MemberIdDesc = 'member_id_DESC',
  MemberTotalChannelsCreatedAsc = 'member_totalChannelsCreated_ASC',
  MemberTotalChannelsCreatedDesc = 'member_totalChannelsCreated_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type MemberMetadataWhereInput = {
  AND?: InputMaybe<Array<MemberMetadataWhereInput>>;
  OR?: InputMaybe<Array<MemberMetadataWhereInput>>;
  about_contains?: InputMaybe<Scalars['String']['input']>;
  about_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  about_endsWith?: InputMaybe<Scalars['String']['input']>;
  about_eq?: InputMaybe<Scalars['String']['input']>;
  about_gt?: InputMaybe<Scalars['String']['input']>;
  about_gte?: InputMaybe<Scalars['String']['input']>;
  about_in?: InputMaybe<Array<Scalars['String']['input']>>;
  about_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  about_lt?: InputMaybe<Scalars['String']['input']>;
  about_lte?: InputMaybe<Scalars['String']['input']>;
  about_not_contains?: InputMaybe<Scalars['String']['input']>;
  about_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  about_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  about_not_eq?: InputMaybe<Scalars['String']['input']>;
  about_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  about_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  about_startsWith?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<AvatarWhereInput>;
  avatar_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Stored information about a registered user */
export type Membership = {
  __typename?: 'Membership';
  /** Channels the member is banned from (in terms of commenting/reacting) */
  bannedFromChannels: Array<BannedMember>;
  /** Channels owned by this member */
  channels: Array<Channel>;
  /** Member's controller account id */
  controllerAccount: Scalars['String']['output'];
  /** Timestamp of the block the membership was created at */
  createdAt: Scalars['DateTime']['output'];
  /** The unique handle chosen by member */
  handle: Scalars['String']['output'];
  /** MemberId: runtime identifier for a user */
  id: Scalars['String']['output'];
  /** Member's metadata */
  metadata?: Maybe<MemberMetadata>;
  /** Number of channels ever created by this member */
  totalChannelsCreated: Scalars['Int']['output'];
  /** Auctions in which is this user whitelisted to participate */
  whitelistedInAuctions: Array<AuctionWhitelistedMember>;
};


/** Stored information about a registered user */
export type MembershipBannedFromChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BannedMemberOrderByInput>>;
  where?: InputMaybe<BannedMemberWhereInput>;
};


/** Stored information about a registered user */
export type MembershipChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>;
  where?: InputMaybe<ChannelWhereInput>;
};


/** Stored information about a registered user */
export type MembershipWhitelistedInAuctionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuctionWhitelistedMemberOrderByInput>>;
  where?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
};

export type MembershipEdge = {
  __typename?: 'MembershipEdge';
  cursor: Scalars['String']['output'];
  node: Membership;
};

export enum MembershipOrderByInput {
  ControllerAccountAsc = 'controllerAccount_ASC',
  ControllerAccountDesc = 'controllerAccount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataAboutAsc = 'metadata_about_ASC',
  MetadataAboutDesc = 'metadata_about_DESC',
  MetadataIdAsc = 'metadata_id_ASC',
  MetadataIdDesc = 'metadata_id_DESC',
  MetadataNameAsc = 'metadata_name_ASC',
  MetadataNameDesc = 'metadata_name_DESC',
  TotalChannelsCreatedAsc = 'totalChannelsCreated_ASC',
  TotalChannelsCreatedDesc = 'totalChannelsCreated_DESC'
}

export type MembershipWhereInput = {
  AND?: InputMaybe<Array<MembershipWhereInput>>;
  OR?: InputMaybe<Array<MembershipWhereInput>>;
  bannedFromChannels_every?: InputMaybe<BannedMemberWhereInput>;
  bannedFromChannels_none?: InputMaybe<BannedMemberWhereInput>;
  bannedFromChannels_some?: InputMaybe<BannedMemberWhereInput>;
  channels_every?: InputMaybe<ChannelWhereInput>;
  channels_none?: InputMaybe<ChannelWhereInput>;
  channels_some?: InputMaybe<ChannelWhereInput>;
  controllerAccount_contains?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_endsWith?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_eq?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_gt?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_gte?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  controllerAccount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  controllerAccount_lt?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_lte?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_not_eq?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  controllerAccount_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  controllerAccount_startsWith?: InputMaybe<Scalars['String']['input']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  handle_endsWith?: InputMaybe<Scalars['String']['input']>;
  handle_eq?: InputMaybe<Scalars['String']['input']>;
  handle_gt?: InputMaybe<Scalars['String']['input']>;
  handle_gte?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  handle_lt?: InputMaybe<Scalars['String']['input']>;
  handle_lte?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  handle_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  handle_not_eq?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  handle_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<MemberMetadataWhereInput>;
  metadata_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalChannelsCreated_eq?: InputMaybe<Scalars['Int']['input']>;
  totalChannelsCreated_gt?: InputMaybe<Scalars['Int']['input']>;
  totalChannelsCreated_gte?: InputMaybe<Scalars['Int']['input']>;
  totalChannelsCreated_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalChannelsCreated_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalChannelsCreated_lt?: InputMaybe<Scalars['Int']['input']>;
  totalChannelsCreated_lte?: InputMaybe<Scalars['Int']['input']>;
  totalChannelsCreated_not_eq?: InputMaybe<Scalars['Int']['input']>;
  totalChannelsCreated_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  whitelistedInAuctions_every?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
  whitelistedInAuctions_none?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
  whitelistedInAuctions_some?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
};

export type MembershipsConnection = {
  __typename?: 'MembershipsConnection';
  edges: Array<MembershipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MetaprotocolTransactionResult = MetaprotocolTransactionResultChannelPaid | MetaprotocolTransactionResultCommentCreated | MetaprotocolTransactionResultCommentDeleted | MetaprotocolTransactionResultCommentEdited | MetaprotocolTransactionResultCommentModerated | MetaprotocolTransactionResultFailed | MetaprotocolTransactionResultOk;

export type MetaprotocolTransactionResultChannelPaid = {
  __typename?: 'MetaprotocolTransactionResultChannelPaid';
  channelPaid?: Maybe<Channel>;
};

export type MetaprotocolTransactionResultCommentCreated = {
  __typename?: 'MetaprotocolTransactionResultCommentCreated';
  commentCreated?: Maybe<Comment>;
};

export type MetaprotocolTransactionResultCommentDeleted = {
  __typename?: 'MetaprotocolTransactionResultCommentDeleted';
  commentDeleted?: Maybe<Comment>;
};

export type MetaprotocolTransactionResultCommentEdited = {
  __typename?: 'MetaprotocolTransactionResultCommentEdited';
  commentEdited?: Maybe<Comment>;
};

export type MetaprotocolTransactionResultCommentModerated = {
  __typename?: 'MetaprotocolTransactionResultCommentModerated';
  commentModerated?: Maybe<Comment>;
};

export type MetaprotocolTransactionResultFailed = {
  __typename?: 'MetaprotocolTransactionResultFailed';
  errorMessage: Scalars['String']['output'];
};

export type MetaprotocolTransactionResultOk = {
  __typename?: 'MetaprotocolTransactionResultOK';
  phantom?: Maybe<Scalars['Int']['output']>;
};

export type MetaprotocolTransactionResultWhereInput = {
  channelPaid?: InputMaybe<ChannelWhereInput>;
  channelPaid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commentCreated?: InputMaybe<CommentWhereInput>;
  commentCreated_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commentDeleted?: InputMaybe<CommentWhereInput>;
  commentDeleted_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commentEdited?: InputMaybe<CommentWhereInput>;
  commentEdited_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commentModerated?: InputMaybe<CommentWhereInput>;
  commentModerated_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  errorMessage_endsWith?: InputMaybe<Scalars['String']['input']>;
  errorMessage_eq?: InputMaybe<Scalars['String']['input']>;
  errorMessage_gt?: InputMaybe<Scalars['String']['input']>;
  errorMessage_gte?: InputMaybe<Scalars['String']['input']>;
  errorMessage_in?: InputMaybe<Array<Scalars['String']['input']>>;
  errorMessage_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  errorMessage_lt?: InputMaybe<Scalars['String']['input']>;
  errorMessage_lte?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_eq?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  errorMessage_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  errorMessage_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  phantom_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_gt?: InputMaybe<Scalars['Int']['input']>;
  phantom_gte?: InputMaybe<Scalars['Int']['input']>;
  phantom_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  phantom_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_lt?: InputMaybe<Scalars['Int']['input']>;
  phantom_lte?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type MetaprotocolTransactionStatusEventData = {
  __typename?: 'MetaprotocolTransactionStatusEventData';
  /** The result of metaprotocol action */
  result: MetaprotocolTransactionResult;
};

export type Mutation = {
  __typename?: 'Mutation';
  addVideoView: AddVideoViewResult;
  excludeContent: ExcludeContentResult;
  followChannel: ChannelFollowResult;
  reportChannel: ChannelReportInfo;
  reportVideo: VideoReportInfo;
  requestNftFeatured: NftFeaturedRequstInfo;
  restoreContent: RestoreContentResult;
  setCategoryFeaturedVideos: SetCategoryFeaturedVideosResult;
  setFeaturedNfts: SetFeaturedNftsResult;
  setKillSwitch: KillSwitch;
  setSupportedCategories: SetSupportedCategoriesResult;
  setVideoHero: SetVideoHeroResult;
  setVideoViewPerIpTimeLimit: VideoViewPerIpTimeLimit;
  setVideoWeights: VideoWeights;
  signAppActionCommitment: GeneratedSignature;
  unfollowChannel: ChannelUnfollowResult;
};


export type MutationAddVideoViewArgs = {
  videoId: Scalars['String']['input'];
};


export type MutationExcludeContentArgs = {
  ids: Array<Scalars['String']['input']>;
  type: ExcludableContentType;
};


export type MutationFollowChannelArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationReportChannelArgs = {
  channelId: Scalars['String']['input'];
  rationale: Scalars['String']['input'];
};


export type MutationReportVideoArgs = {
  rationale: Scalars['String']['input'];
  videoId: Scalars['String']['input'];
};


export type MutationRequestNftFeaturedArgs = {
  nftId: Scalars['String']['input'];
  rationale: Scalars['String']['input'];
};


export type MutationRestoreContentArgs = {
  ids: Array<Scalars['String']['input']>;
  type: ExcludableContentType;
};


export type MutationSetCategoryFeaturedVideosArgs = {
  categoryId: Scalars['String']['input'];
  videos: Array<FeaturedVideoInput>;
};


export type MutationSetFeaturedNftsArgs = {
  featuredNftsIds: Array<Scalars['String']['input']>;
};


export type MutationSetKillSwitchArgs = {
  isKilled: Scalars['Boolean']['input'];
};


export type MutationSetSupportedCategoriesArgs = {
  supportNewCategories?: InputMaybe<Scalars['Boolean']['input']>;
  supportNoCategoryVideos?: InputMaybe<Scalars['Boolean']['input']>;
  supportedCategoriesIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSetVideoHeroArgs = {
  heroPosterUrl: Scalars['String']['input'];
  heroTitle: Scalars['String']['input'];
  videoCutUrl: Scalars['String']['input'];
  videoId: Scalars['String']['input'];
};


export type MutationSetVideoViewPerIpTimeLimitArgs = {
  limitInSeconds: Scalars['Int']['input'];
};


export type MutationSetVideoWeightsArgs = {
  commentsWeight: Scalars['Float']['input'];
  joysteamTimestampSubWeight: Scalars['Float']['input'];
  newnessWeight: Scalars['Float']['input'];
  reactionsWeight: Scalars['Float']['input'];
  viewsWeight: Scalars['Float']['input'];
  ytTimestampSubWeight: Scalars['Float']['input'];
};


export type MutationSignAppActionCommitmentArgs = {
  actionType: AppActionActionType;
  assets: Scalars['String']['input'];
  creatorId: Scalars['String']['input'];
  nonce: Scalars['Float']['input'];
  rawAction: Scalars['String']['input'];
};


export type MutationUnfollowChannelArgs = {
  channelId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type NftActivitiesConnection = {
  __typename?: 'NftActivitiesConnection';
  edges: Array<NftActivityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NftActivity = {
  __typename?: 'NftActivity';
  /** Nft-related activity */
  event: Event;
  /** Autoincremented */
  id: Scalars['String']['output'];
  /** The member the activity relates to */
  member: Membership;
};

export type NftActivityEdge = {
  __typename?: 'NftActivityEdge';
  cursor: Scalars['String']['output'];
  node: NftActivity;
};

export enum NftActivityOrderByInput {
  EventIdAsc = 'event_id_ASC',
  EventIdDesc = 'event_id_DESC',
  EventInBlockAsc = 'event_inBlock_ASC',
  EventInBlockDesc = 'event_inBlock_DESC',
  EventInExtrinsicAsc = 'event_inExtrinsic_ASC',
  EventInExtrinsicDesc = 'event_inExtrinsic_DESC',
  EventIndexInBlockAsc = 'event_indexInBlock_ASC',
  EventIndexInBlockDesc = 'event_indexInBlock_DESC',
  EventTimestampAsc = 'event_timestamp_ASC',
  EventTimestampDesc = 'event_timestamp_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberControllerAccountAsc = 'member_controllerAccount_ASC',
  MemberControllerAccountDesc = 'member_controllerAccount_DESC',
  MemberCreatedAtAsc = 'member_createdAt_ASC',
  MemberCreatedAtDesc = 'member_createdAt_DESC',
  MemberHandleAsc = 'member_handle_ASC',
  MemberHandleDesc = 'member_handle_DESC',
  MemberIdAsc = 'member_id_ASC',
  MemberIdDesc = 'member_id_DESC',
  MemberTotalChannelsCreatedAsc = 'member_totalChannelsCreated_ASC',
  MemberTotalChannelsCreatedDesc = 'member_totalChannelsCreated_DESC'
}

export type NftActivityWhereInput = {
  AND?: InputMaybe<Array<NftActivityWhereInput>>;
  OR?: InputMaybe<Array<NftActivityWhereInput>>;
  event?: InputMaybe<EventWhereInput>;
  event_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NftBoughtEventData = {
  __typename?: 'NftBoughtEventData';
  /** Member that bought the NFT. */
  buyer: Membership;
  /** The NFT that was bought */
  nft: OwnedNft;
  /** NFT owner before it was bought */
  previousNftOwner: NftOwner;
  /** Price for which the NFT was bought */
  price: Scalars['BigInt']['output'];
};

export type NftFeaturedRequstInfo = {
  __typename?: 'NftFeaturedRequstInfo';
  created: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  nftId: Scalars['String']['output'];
  rationale: Scalars['String']['output'];
  reporterIp: Scalars['String']['output'];
};

export type NftFeaturingRequest = {
  __typename?: 'NftFeaturingRequest';
  /** Unique identifier of the request */
  id: Scalars['String']['output'];
  /** IP address of the reporter */
  ip: Scalars['String']['output'];
  /** ID of the nft that is being requested to be featured by operator */
  nftId: Scalars['String']['output'];
  /** Rationale behind the request */
  rationale: Scalars['String']['output'];
  /** Time of the request */
  timestamp: Scalars['DateTime']['output'];
};

export type NftFeaturingRequestEdge = {
  __typename?: 'NftFeaturingRequestEdge';
  cursor: Scalars['String']['output'];
  node: NftFeaturingRequest;
};

export enum NftFeaturingRequestOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IpAsc = 'ip_ASC',
  IpDesc = 'ip_DESC',
  NftIdAsc = 'nftId_ASC',
  NftIdDesc = 'nftId_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type NftFeaturingRequestWhereInput = {
  AND?: InputMaybe<Array<NftFeaturingRequestWhereInput>>;
  OR?: InputMaybe<Array<NftFeaturingRequestWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_contains?: InputMaybe<Scalars['String']['input']>;
  ip_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_eq?: InputMaybe<Scalars['String']['input']>;
  ip_gt?: InputMaybe<Scalars['String']['input']>;
  ip_gte?: InputMaybe<Scalars['String']['input']>;
  ip_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ip_lt?: InputMaybe<Scalars['String']['input']>;
  ip_lte?: InputMaybe<Scalars['String']['input']>;
  ip_not_contains?: InputMaybe<Scalars['String']['input']>;
  ip_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_not_eq?: InputMaybe<Scalars['String']['input']>;
  ip_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_startsWith?: InputMaybe<Scalars['String']['input']>;
  nftId_contains?: InputMaybe<Scalars['String']['input']>;
  nftId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  nftId_endsWith?: InputMaybe<Scalars['String']['input']>;
  nftId_eq?: InputMaybe<Scalars['String']['input']>;
  nftId_gt?: InputMaybe<Scalars['String']['input']>;
  nftId_gte?: InputMaybe<Scalars['String']['input']>;
  nftId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  nftId_lt?: InputMaybe<Scalars['String']['input']>;
  nftId_lte?: InputMaybe<Scalars['String']['input']>;
  nftId_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  nftId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  nftId_not_eq?: InputMaybe<Scalars['String']['input']>;
  nftId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  nftId_startsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_contains?: InputMaybe<Scalars['String']['input']>;
  rationale_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rationale_endsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_eq?: InputMaybe<Scalars['String']['input']>;
  rationale_gt?: InputMaybe<Scalars['String']['input']>;
  rationale_gte?: InputMaybe<Scalars['String']['input']>;
  rationale_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rationale_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  rationale_lt?: InputMaybe<Scalars['String']['input']>;
  rationale_lte?: InputMaybe<Scalars['String']['input']>;
  rationale_not_contains?: InputMaybe<Scalars['String']['input']>;
  rationale_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rationale_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_not_eq?: InputMaybe<Scalars['String']['input']>;
  rationale_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rationale_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NftFeaturingRequestsConnection = {
  __typename?: 'NftFeaturingRequestsConnection';
  edges: Array<NftFeaturingRequestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NftHistoryEntriesConnection = {
  __typename?: 'NftHistoryEntriesConnection';
  edges: Array<NftHistoryEntryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NftHistoryEntry = {
  __typename?: 'NftHistoryEntry';
  /** Nft-related event */
  event: Event;
  /** Autoincremented */
  id: Scalars['String']['output'];
  /** The NFT the event relates to */
  nft: OwnedNft;
};

export type NftHistoryEntryEdge = {
  __typename?: 'NftHistoryEntryEdge';
  cursor: Scalars['String']['output'];
  node: NftHistoryEntry;
};

export enum NftHistoryEntryOrderByInput {
  EventIdAsc = 'event_id_ASC',
  EventIdDesc = 'event_id_DESC',
  EventInBlockAsc = 'event_inBlock_ASC',
  EventInBlockDesc = 'event_inBlock_DESC',
  EventInExtrinsicAsc = 'event_inExtrinsic_ASC',
  EventInExtrinsicDesc = 'event_inExtrinsic_DESC',
  EventIndexInBlockAsc = 'event_indexInBlock_ASC',
  EventIndexInBlockDesc = 'event_indexInBlock_DESC',
  EventTimestampAsc = 'event_timestamp_ASC',
  EventTimestampDesc = 'event_timestamp_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NftCreatedAtAsc = 'nft_createdAt_ASC',
  NftCreatedAtDesc = 'nft_createdAt_DESC',
  NftCreatorRoyaltyAsc = 'nft_creatorRoyalty_ASC',
  NftCreatorRoyaltyDesc = 'nft_creatorRoyalty_DESC',
  NftIdAsc = 'nft_id_ASC',
  NftIdDesc = 'nft_id_DESC',
  NftIsFeaturedAsc = 'nft_isFeatured_ASC',
  NftIsFeaturedDesc = 'nft_isFeatured_DESC',
  NftLastSaleDateAsc = 'nft_lastSaleDate_ASC',
  NftLastSaleDateDesc = 'nft_lastSaleDate_DESC',
  NftLastSalePriceAsc = 'nft_lastSalePrice_ASC',
  NftLastSalePriceDesc = 'nft_lastSalePrice_DESC'
}

export type NftHistoryEntryWhereInput = {
  AND?: InputMaybe<Array<NftHistoryEntryWhereInput>>;
  OR?: InputMaybe<Array<NftHistoryEntryWhereInput>>;
  event?: InputMaybe<EventWhereInput>;
  event_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  nft?: InputMaybe<OwnedNftWhereInput>;
  nft_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NftIssuedEventData = {
  __typename?: 'NftIssuedEventData';
  /** Actor that issued the NFT. */
  actor: ContentActor;
  /** NFT that was issued. */
  nft: OwnedNft;
  /** NFT's initial owner. */
  nftOwner: NftOwner;
};

export type NftOwner = NftOwnerChannel | NftOwnerMember;

export type NftOwnerChannel = {
  __typename?: 'NftOwnerChannel';
  channel: Channel;
};

export type NftOwnerMember = {
  __typename?: 'NftOwnerMember';
  member: Membership;
};

export type NftOwnerWhereInput = {
  channel?: InputMaybe<ChannelWhereInput>;
  channel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NftSellOrderMadeEventData = {
  __typename?: 'NftSellOrderMadeEventData';
  /** Content actor acting as NFT owner. */
  actor: ContentActor;
  /** NFT being sold */
  nft: OwnedNft;
  /** NFT owner at the time it was put on sale */
  nftOwner: NftOwner;
  /** Offer's price. */
  price: Scalars['BigInt']['output'];
};

export type NodeLocationMetadata = {
  __typename?: 'NodeLocationMetadata';
  /** City name */
  city?: Maybe<Scalars['String']['output']>;
  /** Geographic coordinates */
  coordinates?: Maybe<GeoCoordinates>;
  /** ISO 3166-1 alpha-2 country code (2 letters) */
  countryCode?: Maybe<Scalars['String']['output']>;
};

export type NodeLocationMetadataWhereInput = {
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  city_endsWith?: InputMaybe<Scalars['String']['input']>;
  city_eq?: InputMaybe<Scalars['String']['input']>;
  city_gt?: InputMaybe<Scalars['String']['input']>;
  city_gte?: InputMaybe<Scalars['String']['input']>;
  city_in?: InputMaybe<Array<Scalars['String']['input']>>;
  city_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  city_lt?: InputMaybe<Scalars['String']['input']>;
  city_lte?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  city_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  city_not_eq?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  city_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  city_startsWith?: InputMaybe<Scalars['String']['input']>;
  coordinates?: InputMaybe<GeoCoordinatesWhereInput>;
  coordinates_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode_contains?: InputMaybe<Scalars['String']['input']>;
  countryCode_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  countryCode_endsWith?: InputMaybe<Scalars['String']['input']>;
  countryCode_eq?: InputMaybe<Scalars['String']['input']>;
  countryCode_gt?: InputMaybe<Scalars['String']['input']>;
  countryCode_gte?: InputMaybe<Scalars['String']['input']>;
  countryCode_in?: InputMaybe<Array<Scalars['String']['input']>>;
  countryCode_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode_lt?: InputMaybe<Scalars['String']['input']>;
  countryCode_lte?: InputMaybe<Scalars['String']['input']>;
  countryCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  countryCode_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  countryCode_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  countryCode_not_eq?: InputMaybe<Scalars['String']['input']>;
  countryCode_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  countryCode_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  countryCode_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  /** The notification event */
  event: Event;
  /** Autoincremented */
  id: Scalars['String']['output'];
  /** Member that should recieve the notification */
  member: Membership;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export enum NotificationOrderByInput {
  EventIdAsc = 'event_id_ASC',
  EventIdDesc = 'event_id_DESC',
  EventInBlockAsc = 'event_inBlock_ASC',
  EventInBlockDesc = 'event_inBlock_DESC',
  EventInExtrinsicAsc = 'event_inExtrinsic_ASC',
  EventInExtrinsicDesc = 'event_inExtrinsic_DESC',
  EventIndexInBlockAsc = 'event_indexInBlock_ASC',
  EventIndexInBlockDesc = 'event_indexInBlock_DESC',
  EventTimestampAsc = 'event_timestamp_ASC',
  EventTimestampDesc = 'event_timestamp_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberControllerAccountAsc = 'member_controllerAccount_ASC',
  MemberControllerAccountDesc = 'member_controllerAccount_DESC',
  MemberCreatedAtAsc = 'member_createdAt_ASC',
  MemberCreatedAtDesc = 'member_createdAt_DESC',
  MemberHandleAsc = 'member_handle_ASC',
  MemberHandleDesc = 'member_handle_DESC',
  MemberIdAsc = 'member_id_ASC',
  MemberIdDesc = 'member_id_DESC',
  MemberTotalChannelsCreatedAsc = 'member_totalChannelsCreated_ASC',
  MemberTotalChannelsCreatedDesc = 'member_totalChannelsCreated_DESC'
}

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  event?: InputMaybe<EventWhereInput>;
  event_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  edges: Array<NotificationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OpenAuctionBidAcceptedEventData = {
  __typename?: 'OpenAuctionBidAcceptedEventData';
  /** Content actor that accepted the bid. */
  actor: ContentActor;
  /** NFT owner before the auction was completed */
  previousNftOwner: NftOwner;
  /** Accepted/winning bid */
  winningBid: Bid;
};

export type OpenAuctionStartedEventData = {
  __typename?: 'OpenAuctionStartedEventData';
  /** Actor that started this auction. */
  actor: ContentActor;
  /** Auction started. */
  auction: Auction;
  /** Nft owner at the time it was put on an auction. */
  nftOwner: NftOwner;
};

/** Represents NFT details */
export type OwnedNft = {
  __typename?: 'OwnedNft';
  /** Auctions done for this NFT */
  auctions: Array<Auction>;
  /** All NFT auction bids */
  bids: Array<Bid>;
  /** Timestamp of the block the NFT was created at */
  createdAt: Scalars['DateTime']['output'];
  /** Creator royalty (if any) */
  creatorRoyalty?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  /** Flag to indicate whether the NFT is featured or not */
  isFeatured: Scalars['Boolean']['output'];
  /** NFT's last sale date (if any) */
  lastSaleDate?: Maybe<Scalars['DateTime']['output']>;
  /** NFT's last sale price (if any) */
  lastSalePrice?: Maybe<Scalars['BigInt']['output']>;
  /** Current owner of the NFT. */
  owner: NftOwner;
  /** NFT's transactional status */
  transactionalStatus?: Maybe<TransactionalStatus>;
  /** NFT's video */
  video: Video;
};


/** Represents NFT details */
export type OwnedNftAuctionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuctionOrderByInput>>;
  where?: InputMaybe<AuctionWhereInput>;
};


/** Represents NFT details */
export type OwnedNftBidsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BidOrderByInput>>;
  where?: InputMaybe<BidWhereInput>;
};

export type OwnedNftEdge = {
  __typename?: 'OwnedNftEdge';
  cursor: Scalars['String']['output'];
  node: OwnedNft;
};

export enum OwnedNftOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatorRoyaltyAsc = 'creatorRoyalty_ASC',
  CreatorRoyaltyDesc = 'creatorRoyalty_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  LastSaleDateAsc = 'lastSaleDate_ASC',
  LastSaleDateDesc = 'lastSaleDate_DESC',
  LastSalePriceAsc = 'lastSalePrice_ASC',
  LastSalePriceDesc = 'lastSalePrice_DESC',
  OwnerIsTypeOfAsc = 'owner_isTypeOf_ASC',
  OwnerIsTypeOfDesc = 'owner_isTypeOf_DESC',
  TransactionalStatusIsTypeOfAsc = 'transactionalStatus_isTypeOf_ASC',
  TransactionalStatusIsTypeOfDesc = 'transactionalStatus_isTypeOf_DESC',
  TransactionalStatusPhantomAsc = 'transactionalStatus_phantom_ASC',
  TransactionalStatusPhantomDesc = 'transactionalStatus_phantom_DESC',
  TransactionalStatusPriceAsc = 'transactionalStatus_price_ASC',
  TransactionalStatusPriceDesc = 'transactionalStatus_price_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type OwnedNftWhereInput = {
  AND?: InputMaybe<Array<OwnedNftWhereInput>>;
  OR?: InputMaybe<Array<OwnedNftWhereInput>>;
  auctions_every?: InputMaybe<AuctionWhereInput>;
  auctions_none?: InputMaybe<AuctionWhereInput>;
  auctions_some?: InputMaybe<AuctionWhereInput>;
  bids_every?: InputMaybe<BidWhereInput>;
  bids_none?: InputMaybe<BidWhereInput>;
  bids_some?: InputMaybe<BidWhereInput>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  creatorRoyalty_eq?: InputMaybe<Scalars['Float']['input']>;
  creatorRoyalty_gt?: InputMaybe<Scalars['Float']['input']>;
  creatorRoyalty_gte?: InputMaybe<Scalars['Float']['input']>;
  creatorRoyalty_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  creatorRoyalty_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  creatorRoyalty_lt?: InputMaybe<Scalars['Float']['input']>;
  creatorRoyalty_lte?: InputMaybe<Scalars['Float']['input']>;
  creatorRoyalty_not_eq?: InputMaybe<Scalars['Float']['input']>;
  creatorRoyalty_not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isFeatured_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  lastSaleDate_eq?: InputMaybe<Scalars['DateTime']['input']>;
  lastSaleDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  lastSaleDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  lastSaleDate_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lastSaleDate_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastSaleDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  lastSaleDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  lastSaleDate_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  lastSaleDate_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lastSalePrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastSalePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastSalePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastSalePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastSalePrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastSalePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastSalePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastSalePrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastSalePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  owner?: InputMaybe<NftOwnerWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  transactionalStatus?: InputMaybe<TransactionalStatusWhereInput>;
  transactionalStatus_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OwnedNftsConnection = {
  __typename?: 'OwnedNftsConnection';
  edges: Array<OwnedNftEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

/** Various Channel Payment Contexts */
export type PaymentContext = PaymentContextChannel | PaymentContextVideo;

export type PaymentContextChannel = {
  __typename?: 'PaymentContextChannel';
  /** Channel for which the payment was made */
  channel: Channel;
};

export type PaymentContextVideo = {
  __typename?: 'PaymentContextVideo';
  /** Video for which the payment was made */
  video: Video;
};

export type PaymentContextWhereInput = {
  channel?: InputMaybe<ChannelWhereInput>;
  channel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProcessorState = {
  __typename?: 'ProcessorState';
  lastProcessedBlock: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  appById?: Maybe<App>;
  /** @deprecated Use appById */
  appByUniqueInput?: Maybe<App>;
  apps: Array<App>;
  appsConnection: AppsConnection;
  auctionById?: Maybe<Auction>;
  /** @deprecated Use auctionById */
  auctionByUniqueInput?: Maybe<Auction>;
  auctionWhitelistedMemberById?: Maybe<AuctionWhitelistedMember>;
  /** @deprecated Use auctionWhitelistedMemberById */
  auctionWhitelistedMemberByUniqueInput?: Maybe<AuctionWhitelistedMember>;
  auctionWhitelistedMembers: Array<AuctionWhitelistedMember>;
  auctionWhitelistedMembersConnection: AuctionWhitelistedMembersConnection;
  auctions: Array<Auction>;
  auctionsConnection: AuctionsConnection;
  bannedMemberById?: Maybe<BannedMember>;
  /** @deprecated Use bannedMemberById */
  bannedMemberByUniqueInput?: Maybe<BannedMember>;
  bannedMembers: Array<BannedMember>;
  bannedMembersConnection: BannedMembersConnection;
  bidById?: Maybe<Bid>;
  /** @deprecated Use bidById */
  bidByUniqueInput?: Maybe<Bid>;
  bids: Array<Bid>;
  bidsConnection: BidsConnection;
  channelById?: Maybe<Channel>;
  /** @deprecated Use channelById */
  channelByUniqueInput?: Maybe<Channel>;
  channelFollowById?: Maybe<ChannelFollow>;
  /** @deprecated Use channelFollowById */
  channelFollowByUniqueInput?: Maybe<ChannelFollow>;
  channelFollows: Array<ChannelFollow>;
  channelFollowsConnection: ChannelFollowsConnection;
  channelNftCollectors: Array<ChannelNftCollector>;
  channels: Array<Channel>;
  channelsConnection: ChannelsConnection;
  commentById?: Maybe<Comment>;
  /** @deprecated Use commentById */
  commentByUniqueInput?: Maybe<Comment>;
  commentReactionById?: Maybe<CommentReaction>;
  /** @deprecated Use commentReactionById */
  commentReactionByUniqueInput?: Maybe<CommentReaction>;
  commentReactions: Array<CommentReaction>;
  commentReactionsConnection: CommentReactionsConnection;
  comments: Array<Comment>;
  commentsConnection: CommentsConnection;
  curatorById?: Maybe<Curator>;
  /** @deprecated Use curatorById */
  curatorByUniqueInput?: Maybe<Curator>;
  curatorGroupById?: Maybe<CuratorGroup>;
  /** @deprecated Use curatorGroupById */
  curatorGroupByUniqueInput?: Maybe<CuratorGroup>;
  curatorGroups: Array<CuratorGroup>;
  curatorGroupsConnection: CuratorGroupsConnection;
  curators: Array<Curator>;
  curatorsConnection: CuratorsConnection;
  distributionBucketBagById?: Maybe<DistributionBucketBag>;
  /** @deprecated Use distributionBucketBagById */
  distributionBucketBagByUniqueInput?: Maybe<DistributionBucketBag>;
  distributionBucketBags: Array<DistributionBucketBag>;
  distributionBucketBagsConnection: DistributionBucketBagsConnection;
  distributionBucketById?: Maybe<DistributionBucket>;
  /** @deprecated Use distributionBucketById */
  distributionBucketByUniqueInput?: Maybe<DistributionBucket>;
  distributionBucketFamilies: Array<DistributionBucketFamily>;
  distributionBucketFamiliesConnection: DistributionBucketFamiliesConnection;
  distributionBucketFamilyById?: Maybe<DistributionBucketFamily>;
  /** @deprecated Use distributionBucketFamilyById */
  distributionBucketFamilyByUniqueInput?: Maybe<DistributionBucketFamily>;
  distributionBucketFamilyMetadata: Array<DistributionBucketFamilyMetadata>;
  distributionBucketFamilyMetadataById?: Maybe<DistributionBucketFamilyMetadata>;
  /** @deprecated Use distributionBucketFamilyMetadataById */
  distributionBucketFamilyMetadataByUniqueInput?: Maybe<DistributionBucketFamilyMetadata>;
  distributionBucketFamilyMetadataConnection: DistributionBucketFamilyMetadataConnection;
  distributionBucketOperatorById?: Maybe<DistributionBucketOperator>;
  /** @deprecated Use distributionBucketOperatorById */
  distributionBucketOperatorByUniqueInput?: Maybe<DistributionBucketOperator>;
  distributionBucketOperatorMetadata: Array<DistributionBucketOperatorMetadata>;
  distributionBucketOperatorMetadataById?: Maybe<DistributionBucketOperatorMetadata>;
  /** @deprecated Use distributionBucketOperatorMetadataById */
  distributionBucketOperatorMetadataByUniqueInput?: Maybe<DistributionBucketOperatorMetadata>;
  distributionBucketOperatorMetadataConnection: DistributionBucketOperatorMetadataConnection;
  distributionBucketOperators: Array<DistributionBucketOperator>;
  distributionBucketOperatorsConnection: DistributionBucketOperatorsConnection;
  distributionBuckets: Array<DistributionBucket>;
  distributionBucketsConnection: DistributionBucketsConnection;
  endingAuctionsNfts: Array<OwnedNft>;
  eventById?: Maybe<Event>;
  /** @deprecated Use eventById */
  eventByUniqueInput?: Maybe<Event>;
  events: Array<Event>;
  eventsConnection: EventsConnection;
  extendedChannels: Array<ExtendedChannel>;
  extendedVideoCategories: Array<ExtendedVideoCategory>;
  getKillSwitch: KillSwitch;
  getVideoViewPerIpTimeLimit: VideoViewPerIpTimeLimit;
  licenseById?: Maybe<License>;
  /** @deprecated Use licenseById */
  licenseByUniqueInput?: Maybe<License>;
  licenses: Array<License>;
  licensesConnection: LicensesConnection;
  memberMetadata: Array<MemberMetadata>;
  memberMetadataById?: Maybe<MemberMetadata>;
  /** @deprecated Use memberMetadataById */
  memberMetadataByUniqueInput?: Maybe<MemberMetadata>;
  memberMetadataConnection: MemberMetadataConnection;
  membershipById?: Maybe<Membership>;
  /** @deprecated Use membershipById */
  membershipByUniqueInput?: Maybe<Membership>;
  memberships: Array<Membership>;
  membershipsConnection: MembershipsConnection;
  mostRecentChannels: Array<ExtendedChannel>;
  mostViewedVideosConnection: VideosConnection;
  nftActivities: Array<NftActivity>;
  nftActivitiesConnection: NftActivitiesConnection;
  nftActivityById?: Maybe<NftActivity>;
  /** @deprecated Use nftActivityById */
  nftActivityByUniqueInput?: Maybe<NftActivity>;
  nftFeaturingRequestById?: Maybe<NftFeaturingRequest>;
  /** @deprecated Use nftFeaturingRequestById */
  nftFeaturingRequestByUniqueInput?: Maybe<NftFeaturingRequest>;
  nftFeaturingRequests: Array<NftFeaturingRequest>;
  nftFeaturingRequestsConnection: NftFeaturingRequestsConnection;
  nftHistoryEntries: Array<NftHistoryEntry>;
  nftHistoryEntriesConnection: NftHistoryEntriesConnection;
  nftHistoryEntryById?: Maybe<NftHistoryEntry>;
  /** @deprecated Use nftHistoryEntryById */
  nftHistoryEntryByUniqueInput?: Maybe<NftHistoryEntry>;
  notificationById?: Maybe<Notification>;
  /** @deprecated Use notificationById */
  notificationByUniqueInput?: Maybe<Notification>;
  notifications: Array<Notification>;
  notificationsConnection: NotificationsConnection;
  ownedNftById?: Maybe<OwnedNft>;
  /** @deprecated Use ownedNftById */
  ownedNftByUniqueInput?: Maybe<OwnedNft>;
  ownedNfts: Array<OwnedNft>;
  ownedNftsConnection: OwnedNftsConnection;
  reportById?: Maybe<Report>;
  /** @deprecated Use reportById */
  reportByUniqueInput?: Maybe<Report>;
  reports: Array<Report>;
  reportsConnection: ReportsConnection;
  squidStatus?: Maybe<SquidStatus>;
  storageBagById?: Maybe<StorageBag>;
  /** @deprecated Use storageBagById */
  storageBagByUniqueInput?: Maybe<StorageBag>;
  storageBags: Array<StorageBag>;
  storageBagsConnection: StorageBagsConnection;
  storageBucketBagById?: Maybe<StorageBucketBag>;
  /** @deprecated Use storageBucketBagById */
  storageBucketBagByUniqueInput?: Maybe<StorageBucketBag>;
  storageBucketBags: Array<StorageBucketBag>;
  storageBucketBagsConnection: StorageBucketBagsConnection;
  storageBucketById?: Maybe<StorageBucket>;
  /** @deprecated Use storageBucketById */
  storageBucketByUniqueInput?: Maybe<StorageBucket>;
  storageBucketOperatorMetadata: Array<StorageBucketOperatorMetadata>;
  storageBucketOperatorMetadataById?: Maybe<StorageBucketOperatorMetadata>;
  /** @deprecated Use storageBucketOperatorMetadataById */
  storageBucketOperatorMetadataByUniqueInput?: Maybe<StorageBucketOperatorMetadata>;
  storageBucketOperatorMetadataConnection: StorageBucketOperatorMetadataConnection;
  storageBuckets: Array<StorageBucket>;
  storageBucketsConnection: StorageBucketsConnection;
  storageDataObjectById?: Maybe<StorageDataObject>;
  /** @deprecated Use storageDataObjectById */
  storageDataObjectByUniqueInput?: Maybe<StorageDataObject>;
  storageDataObjects: Array<StorageDataObject>;
  storageDataObjectsConnection: StorageDataObjectsConnection;
  topSellingChannels: Array<TopSellingChannelsResult>;
  videoById?: Maybe<Video>;
  /** @deprecated Use videoById */
  videoByUniqueInput?: Maybe<Video>;
  videoCategories: Array<VideoCategory>;
  videoCategoriesConnection: VideoCategoriesConnection;
  videoCategoryById?: Maybe<VideoCategory>;
  /** @deprecated Use videoCategoryById */
  videoCategoryByUniqueInput?: Maybe<VideoCategory>;
  videoFeaturedInCategories: Array<VideoFeaturedInCategory>;
  videoFeaturedInCategoriesConnection: VideoFeaturedInCategoriesConnection;
  videoFeaturedInCategoryById?: Maybe<VideoFeaturedInCategory>;
  /** @deprecated Use videoFeaturedInCategoryById */
  videoFeaturedInCategoryByUniqueInput?: Maybe<VideoFeaturedInCategory>;
  videoHero?: Maybe<VideoHero>;
  videoHeroById?: Maybe<VideoHero>;
  /** @deprecated Use videoHeroById */
  videoHeroByUniqueInput?: Maybe<VideoHero>;
  videoHeros: Array<VideoHero>;
  videoHerosConnection: VideoHerosConnection;
  videoMediaEncodingById?: Maybe<VideoMediaEncoding>;
  /** @deprecated Use videoMediaEncodingById */
  videoMediaEncodingByUniqueInput?: Maybe<VideoMediaEncoding>;
  videoMediaEncodings: Array<VideoMediaEncoding>;
  videoMediaEncodingsConnection: VideoMediaEncodingsConnection;
  videoMediaMetadata: Array<VideoMediaMetadata>;
  videoMediaMetadataById?: Maybe<VideoMediaMetadata>;
  /** @deprecated Use videoMediaMetadataById */
  videoMediaMetadataByUniqueInput?: Maybe<VideoMediaMetadata>;
  videoMediaMetadataConnection: VideoMediaMetadataConnection;
  videoReactionById?: Maybe<VideoReaction>;
  /** @deprecated Use videoReactionById */
  videoReactionByUniqueInput?: Maybe<VideoReaction>;
  videoReactions: Array<VideoReaction>;
  videoReactionsConnection: VideoReactionsConnection;
  videoSubtitleById?: Maybe<VideoSubtitle>;
  /** @deprecated Use videoSubtitleById */
  videoSubtitleByUniqueInput?: Maybe<VideoSubtitle>;
  videoSubtitles: Array<VideoSubtitle>;
  videoSubtitlesConnection: VideoSubtitlesConnection;
  videoViewEventById?: Maybe<VideoViewEvent>;
  /** @deprecated Use videoViewEventById */
  videoViewEventByUniqueInput?: Maybe<VideoViewEvent>;
  videoViewEvents: Array<VideoViewEvent>;
  videoViewEventsConnection: VideoViewEventsConnection;
  videos: Array<Video>;
  videosConnection: VideosConnection;
};


export type QueryAppByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAppByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAppsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppOrderByInput>>;
  where?: InputMaybe<AppWhereInput>;
};


export type QueryAppsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AppOrderByInput>;
  where?: InputMaybe<AppWhereInput>;
};


export type QueryAuctionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAuctionByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAuctionWhitelistedMemberByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAuctionWhitelistedMemberByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAuctionWhitelistedMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuctionWhitelistedMemberOrderByInput>>;
  where?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
};


export type QueryAuctionWhitelistedMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AuctionWhitelistedMemberOrderByInput>;
  where?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
};


export type QueryAuctionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuctionOrderByInput>>;
  where?: InputMaybe<AuctionWhereInput>;
};


export type QueryAuctionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AuctionOrderByInput>;
  where?: InputMaybe<AuctionWhereInput>;
};


export type QueryBannedMemberByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryBannedMemberByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryBannedMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BannedMemberOrderByInput>>;
  where?: InputMaybe<BannedMemberWhereInput>;
};


export type QueryBannedMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<BannedMemberOrderByInput>;
  where?: InputMaybe<BannedMemberWhereInput>;
};


export type QueryBidByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryBidByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryBidsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BidOrderByInput>>;
  where?: InputMaybe<BidWhereInput>;
};


export type QueryBidsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<BidOrderByInput>;
  where?: InputMaybe<BidWhereInput>;
};


export type QueryChannelByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryChannelByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryChannelFollowByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryChannelFollowByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryChannelFollowsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelFollowOrderByInput>>;
  where?: InputMaybe<ChannelFollowWhereInput>;
};


export type QueryChannelFollowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ChannelFollowOrderByInput>;
  where?: InputMaybe<ChannelFollowWhereInput>;
};


export type QueryChannelNftCollectorsArgs = {
  channelId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChannelNftCollectorsOrderByInput>;
};


export type QueryChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>;
  where?: InputMaybe<ChannelWhereInput>;
};


export type QueryChannelsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ChannelOrderByInput>;
  where?: InputMaybe<ChannelWhereInput>;
};


export type QueryCommentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCommentByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCommentReactionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCommentReactionByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCommentReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionOrderByInput>>;
  where?: InputMaybe<CommentReactionWhereInput>;
};


export type QueryCommentReactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<CommentReactionOrderByInput>;
  where?: InputMaybe<CommentReactionWhereInput>;
};


export type QueryCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderByInput>>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<CommentOrderByInput>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryCuratorByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCuratorByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCuratorGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCuratorGroupByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCuratorGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CuratorGroupOrderByInput>>;
  where?: InputMaybe<CuratorGroupWhereInput>;
};


export type QueryCuratorGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<CuratorGroupOrderByInput>;
  where?: InputMaybe<CuratorGroupWhereInput>;
};


export type QueryCuratorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CuratorOrderByInput>>;
  where?: InputMaybe<CuratorWhereInput>;
};


export type QueryCuratorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<CuratorOrderByInput>;
  where?: InputMaybe<CuratorWhereInput>;
};


export type QueryDistributionBucketBagByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDistributionBucketBagByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryDistributionBucketBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketBagOrderByInput>>;
  where?: InputMaybe<DistributionBucketBagWhereInput>;
};


export type QueryDistributionBucketBagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DistributionBucketBagOrderByInput>;
  where?: InputMaybe<DistributionBucketBagWhereInput>;
};


export type QueryDistributionBucketByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDistributionBucketByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryDistributionBucketFamiliesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketFamilyOrderByInput>>;
  where?: InputMaybe<DistributionBucketFamilyWhereInput>;
};


export type QueryDistributionBucketFamiliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DistributionBucketFamilyOrderByInput>;
  where?: InputMaybe<DistributionBucketFamilyWhereInput>;
};


export type QueryDistributionBucketFamilyByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDistributionBucketFamilyByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryDistributionBucketFamilyMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketFamilyMetadataOrderByInput>>;
  where?: InputMaybe<DistributionBucketFamilyMetadataWhereInput>;
};


export type QueryDistributionBucketFamilyMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDistributionBucketFamilyMetadataByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryDistributionBucketFamilyMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DistributionBucketFamilyMetadataOrderByInput>;
  where?: InputMaybe<DistributionBucketFamilyMetadataWhereInput>;
};


export type QueryDistributionBucketOperatorByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDistributionBucketOperatorByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryDistributionBucketOperatorMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOperatorMetadataOrderByInput>>;
  where?: InputMaybe<DistributionBucketOperatorMetadataWhereInput>;
};


export type QueryDistributionBucketOperatorMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDistributionBucketOperatorMetadataByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryDistributionBucketOperatorMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DistributionBucketOperatorMetadataOrderByInput>;
  where?: InputMaybe<DistributionBucketOperatorMetadataWhereInput>;
};


export type QueryDistributionBucketOperatorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOperatorOrderByInput>>;
  where?: InputMaybe<DistributionBucketOperatorWhereInput>;
};


export type QueryDistributionBucketOperatorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DistributionBucketOperatorOrderByInput>;
  where?: InputMaybe<DistributionBucketOperatorWhereInput>;
};


export type QueryDistributionBucketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOrderByInput>>;
  where?: InputMaybe<DistributionBucketWhereInput>;
};


export type QueryDistributionBucketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DistributionBucketOrderByInput>;
  where?: InputMaybe<DistributionBucketWhereInput>;
};


export type QueryEndingAuctionsNftsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnedNftWhereInput>;
};


export type QueryEventByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderByInput>>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<EventOrderByInput>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryExtendedChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>;
  where?: InputMaybe<ExtendedChannelWhereInput>;
};


export type QueryLicenseByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryLicenseByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryLicensesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LicenseOrderByInput>>;
  where?: InputMaybe<LicenseWhereInput>;
};


export type QueryLicensesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<LicenseOrderByInput>;
  where?: InputMaybe<LicenseWhereInput>;
};


export type QueryMemberMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemberMetadataOrderByInput>>;
  where?: InputMaybe<MemberMetadataWhereInput>;
};


export type QueryMemberMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryMemberMetadataByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMemberMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MemberMetadataOrderByInput>;
  where?: InputMaybe<MemberMetadataWhereInput>;
};


export type QueryMembershipByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryMembershipByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMembershipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MembershipOrderByInput>>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type QueryMembershipsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MembershipOrderByInput>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type QueryMostRecentChannelsArgs = {
  mostRecentLimit: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>;
  resultsLimit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExtendedChannelWhereInput>;
};


export type QueryMostViewedVideosConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  limit: Scalars['Int']['input'];
  orderBy: Array<VideoOrderByInput>;
  periodDays?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryNftActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftActivityOrderByInput>>;
  where?: InputMaybe<NftActivityWhereInput>;
};


export type QueryNftActivitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<NftActivityOrderByInput>;
  where?: InputMaybe<NftActivityWhereInput>;
};


export type QueryNftActivityByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryNftActivityByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryNftFeaturingRequestByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryNftFeaturingRequestByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryNftFeaturingRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFeaturingRequestOrderByInput>>;
  where?: InputMaybe<NftFeaturingRequestWhereInput>;
};


export type QueryNftFeaturingRequestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<NftFeaturingRequestOrderByInput>;
  where?: InputMaybe<NftFeaturingRequestWhereInput>;
};


export type QueryNftHistoryEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftHistoryEntryOrderByInput>>;
  where?: InputMaybe<NftHistoryEntryWhereInput>;
};


export type QueryNftHistoryEntriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<NftHistoryEntryOrderByInput>;
  where?: InputMaybe<NftHistoryEntryWhereInput>;
};


export type QueryNftHistoryEntryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryNftHistoryEntryByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryNotificationByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotificationByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotificationOrderByInput>>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<NotificationOrderByInput>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryOwnedNftByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryOwnedNftByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryOwnedNftsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OwnedNftOrderByInput>>;
  where?: InputMaybe<OwnedNftWhereInput>;
};


export type QueryOwnedNftsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<OwnedNftOrderByInput>;
  where?: InputMaybe<OwnedNftWhereInput>;
};


export type QueryReportByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryReportByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryReportsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReportOrderByInput>>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QueryReportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ReportOrderByInput>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QueryStorageBagByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStorageBagByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryStorageBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBagOrderByInput>>;
  where?: InputMaybe<StorageBagWhereInput>;
};


export type QueryStorageBagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<StorageBagOrderByInput>;
  where?: InputMaybe<StorageBagWhereInput>;
};


export type QueryStorageBucketBagByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStorageBucketBagByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryStorageBucketBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketBagOrderByInput>>;
  where?: InputMaybe<StorageBucketBagWhereInput>;
};


export type QueryStorageBucketBagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<StorageBucketBagOrderByInput>;
  where?: InputMaybe<StorageBucketBagWhereInput>;
};


export type QueryStorageBucketByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStorageBucketByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryStorageBucketOperatorMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketOperatorMetadataOrderByInput>>;
  where?: InputMaybe<StorageBucketOperatorMetadataWhereInput>;
};


export type QueryStorageBucketOperatorMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStorageBucketOperatorMetadataByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryStorageBucketOperatorMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<StorageBucketOperatorMetadataOrderByInput>;
  where?: InputMaybe<StorageBucketOperatorMetadataWhereInput>;
};


export type QueryStorageBucketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketOrderByInput>>;
  where?: InputMaybe<StorageBucketWhereInput>;
};


export type QueryStorageBucketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<StorageBucketOrderByInput>;
  where?: InputMaybe<StorageBucketWhereInput>;
};


export type QueryStorageDataObjectByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStorageDataObjectByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryStorageDataObjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageDataObjectOrderByInput>>;
  where?: InputMaybe<StorageDataObjectWhereInput>;
};


export type QueryStorageDataObjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<StorageDataObjectOrderByInput>;
  where?: InputMaybe<StorageDataObjectWhereInput>;
};


export type QueryTopSellingChannelsArgs = {
  limit: Scalars['Int']['input'];
  periodDays: Scalars['Int']['input'];
  where?: InputMaybe<ExtendedChannelWhereInput>;
};


export type QueryVideoByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoCategoryOrderByInput>>;
  where?: InputMaybe<VideoCategoryWhereInput>;
};


export type QueryVideoCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoCategoryOrderByInput>;
  where?: InputMaybe<VideoCategoryWhereInput>;
};


export type QueryVideoCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoCategoryByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoFeaturedInCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoFeaturedInCategoryOrderByInput>>;
  where?: InputMaybe<VideoFeaturedInCategoryWhereInput>;
};


export type QueryVideoFeaturedInCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoFeaturedInCategoryOrderByInput>;
  where?: InputMaybe<VideoFeaturedInCategoryWhereInput>;
};


export type QueryVideoFeaturedInCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoFeaturedInCategoryByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoHeroByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoHeroByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoHerosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoHeroOrderByInput>>;
  where?: InputMaybe<VideoHeroWhereInput>;
};


export type QueryVideoHerosConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoHeroOrderByInput>;
  where?: InputMaybe<VideoHeroWhereInput>;
};


export type QueryVideoMediaEncodingByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoMediaEncodingByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoMediaEncodingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoMediaEncodingOrderByInput>>;
  where?: InputMaybe<VideoMediaEncodingWhereInput>;
};


export type QueryVideoMediaEncodingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoMediaEncodingOrderByInput>;
  where?: InputMaybe<VideoMediaEncodingWhereInput>;
};


export type QueryVideoMediaMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoMediaMetadataOrderByInput>>;
  where?: InputMaybe<VideoMediaMetadataWhereInput>;
};


export type QueryVideoMediaMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoMediaMetadataByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoMediaMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoMediaMetadataOrderByInput>;
  where?: InputMaybe<VideoMediaMetadataWhereInput>;
};


export type QueryVideoReactionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoReactionByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoReactionOrderByInput>>;
  where?: InputMaybe<VideoReactionWhereInput>;
};


export type QueryVideoReactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoReactionOrderByInput>;
  where?: InputMaybe<VideoReactionWhereInput>;
};


export type QueryVideoSubtitleByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoSubtitleByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoSubtitlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoSubtitleOrderByInput>>;
  where?: InputMaybe<VideoSubtitleWhereInput>;
};


export type QueryVideoSubtitlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoSubtitleOrderByInput>;
  where?: InputMaybe<VideoSubtitleWhereInput>;
};


export type QueryVideoViewEventByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVideoViewEventByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryVideoViewEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoViewEventOrderByInput>>;
  where?: InputMaybe<VideoViewEventWhereInput>;
};


export type QueryVideoViewEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoViewEventOrderByInput>;
  where?: InputMaybe<VideoViewEventWhereInput>;
};


export type QueryVideosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoOrderByInput>>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryVideosConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VideoOrderByInput>;
  where?: InputMaybe<VideoWhereInput>;
};

export type Report = {
  __typename?: 'Report';
  /** If it's a channel report: ID of the channel being reported (the channel may no longer exist) */
  channelId?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the report */
  id: Scalars['String']['output'];
  /** IP address of the reporter */
  ip: Scalars['String']['output'];
  /** Rationale behind the report */
  rationale: Scalars['String']['output'];
  /** Time of the report */
  timestamp: Scalars['DateTime']['output'];
  /** If it's a video report: ID of the video being reported (the video may no longer exist) */
  videoId?: Maybe<Scalars['String']['output']>;
};

export type ReportEdge = {
  __typename?: 'ReportEdge';
  cursor: Scalars['String']['output'];
  node: Report;
};

export enum ReportOrderByInput {
  ChannelIdAsc = 'channelId_ASC',
  ChannelIdDesc = 'channelId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IpAsc = 'ip_ASC',
  IpDesc = 'ip_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC'
}

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>;
  OR?: InputMaybe<Array<ReportWhereInput>>;
  channelId_contains?: InputMaybe<Scalars['String']['input']>;
  channelId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  channelId_endsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_eq?: InputMaybe<Scalars['String']['input']>;
  channelId_gt?: InputMaybe<Scalars['String']['input']>;
  channelId_gte?: InputMaybe<Scalars['String']['input']>;
  channelId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  channelId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  channelId_lt?: InputMaybe<Scalars['String']['input']>;
  channelId_lte?: InputMaybe<Scalars['String']['input']>;
  channelId_not_contains?: InputMaybe<Scalars['String']['input']>;
  channelId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  channelId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_not_eq?: InputMaybe<Scalars['String']['input']>;
  channelId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  channelId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_contains?: InputMaybe<Scalars['String']['input']>;
  ip_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_eq?: InputMaybe<Scalars['String']['input']>;
  ip_gt?: InputMaybe<Scalars['String']['input']>;
  ip_gte?: InputMaybe<Scalars['String']['input']>;
  ip_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ip_lt?: InputMaybe<Scalars['String']['input']>;
  ip_lte?: InputMaybe<Scalars['String']['input']>;
  ip_not_contains?: InputMaybe<Scalars['String']['input']>;
  ip_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_not_eq?: InputMaybe<Scalars['String']['input']>;
  ip_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_startsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_contains?: InputMaybe<Scalars['String']['input']>;
  rationale_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rationale_endsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_eq?: InputMaybe<Scalars['String']['input']>;
  rationale_gt?: InputMaybe<Scalars['String']['input']>;
  rationale_gte?: InputMaybe<Scalars['String']['input']>;
  rationale_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rationale_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  rationale_lt?: InputMaybe<Scalars['String']['input']>;
  rationale_lte?: InputMaybe<Scalars['String']['input']>;
  rationale_not_contains?: InputMaybe<Scalars['String']['input']>;
  rationale_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  rationale_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_not_eq?: InputMaybe<Scalars['String']['input']>;
  rationale_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rationale_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  rationale_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  videoId_contains?: InputMaybe<Scalars['String']['input']>;
  videoId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  videoId_endsWith?: InputMaybe<Scalars['String']['input']>;
  videoId_eq?: InputMaybe<Scalars['String']['input']>;
  videoId_gt?: InputMaybe<Scalars['String']['input']>;
  videoId_gte?: InputMaybe<Scalars['String']['input']>;
  videoId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  videoId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  videoId_lt?: InputMaybe<Scalars['String']['input']>;
  videoId_lte?: InputMaybe<Scalars['String']['input']>;
  videoId_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  videoId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  videoId_not_eq?: InputMaybe<Scalars['String']['input']>;
  videoId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  videoId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  videoId_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ReportsConnection = {
  __typename?: 'ReportsConnection';
  edges: Array<ReportEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RestoreContentResult = {
  __typename?: 'RestoreContentResult';
  numberOfEntitiesAffected: Scalars['Int']['output'];
};

export type SetCategoryFeaturedVideosResult = {
  __typename?: 'SetCategoryFeaturedVideosResult';
  categoryId: Scalars['String']['output'];
  numberOfFeaturedVideosSet: Scalars['Int']['output'];
  numberOfFeaturedVideosUnset: Scalars['Int']['output'];
};

export type SetFeaturedNftsResult = {
  __typename?: 'SetFeaturedNftsResult';
  /** The updated number of nft that are now explicitly featured by the Gateway */
  newNumberOfNftsFeatured?: Maybe<Scalars['Int']['output']>;
};

export type SetSupportedCategoriesResult = {
  __typename?: 'SetSupportedCategoriesResult';
  /** The updated number of categories that are now explicitly supported by the Gateway */
  newNumberOfCategoriesSupported?: Maybe<Scalars['Int']['output']>;
  /** Whether or not newly created video categories will be automatically supported */
  newlyCreatedCategoriesSupported: Scalars['Boolean']['output'];
  /** Whether or not vidoes w/o any category assigned will be supported */
  noCategoryVideosSupported: Scalars['Boolean']['output'];
};

export type SetVideoHeroResult = {
  __typename?: 'SetVideoHeroResult';
  id: Scalars['String']['output'];
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type StorageBag = {
  __typename?: 'StorageBag';
  /** Distribution buckets assigned to the bag */
  distributionBuckets: Array<DistributionBucketBag>;
  /** Storage bag id */
  id: Scalars['String']['output'];
  /** Data objects in the bag */
  objects: Array<StorageDataObject>;
  /** Owner of the storage bag */
  owner: StorageBagOwner;
  /** Storage buckets assigned to the bag */
  storageBuckets: Array<StorageBucketBag>;
};


export type StorageBagDistributionBucketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketBagOrderByInput>>;
  where?: InputMaybe<DistributionBucketBagWhereInput>;
};


export type StorageBagObjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageDataObjectOrderByInput>>;
  where?: InputMaybe<StorageDataObjectWhereInput>;
};


export type StorageBagStorageBucketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketBagOrderByInput>>;
  where?: InputMaybe<StorageBucketBagWhereInput>;
};

export type StorageBagEdge = {
  __typename?: 'StorageBagEdge';
  cursor: Scalars['String']['output'];
  node: StorageBag;
};

export enum StorageBagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OwnerChannelIdAsc = 'owner_channelId_ASC',
  OwnerChannelIdDesc = 'owner_channelId_DESC',
  OwnerDaoIdAsc = 'owner_daoId_ASC',
  OwnerDaoIdDesc = 'owner_daoId_DESC',
  OwnerIsTypeOfAsc = 'owner_isTypeOf_ASC',
  OwnerIsTypeOfDesc = 'owner_isTypeOf_DESC',
  OwnerMemberIdAsc = 'owner_memberId_ASC',
  OwnerMemberIdDesc = 'owner_memberId_DESC',
  OwnerPhantomAsc = 'owner_phantom_ASC',
  OwnerPhantomDesc = 'owner_phantom_DESC',
  OwnerWorkingGroupIdAsc = 'owner_workingGroupId_ASC',
  OwnerWorkingGroupIdDesc = 'owner_workingGroupId_DESC'
}

export type StorageBagOwner = StorageBagOwnerChannel | StorageBagOwnerCouncil | StorageBagOwnerDao | StorageBagOwnerMember | StorageBagOwnerWorkingGroup;

export type StorageBagOwnerChannel = {
  __typename?: 'StorageBagOwnerChannel';
  channelId: Scalars['String']['output'];
};

export type StorageBagOwnerCouncil = {
  __typename?: 'StorageBagOwnerCouncil';
  phantom?: Maybe<Scalars['Int']['output']>;
};

export type StorageBagOwnerDao = {
  __typename?: 'StorageBagOwnerDAO';
  daoId?: Maybe<Scalars['Int']['output']>;
};

export type StorageBagOwnerMember = {
  __typename?: 'StorageBagOwnerMember';
  memberId: Scalars['String']['output'];
};

export type StorageBagOwnerWhereInput = {
  channelId_contains?: InputMaybe<Scalars['String']['input']>;
  channelId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  channelId_endsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_eq?: InputMaybe<Scalars['String']['input']>;
  channelId_gt?: InputMaybe<Scalars['String']['input']>;
  channelId_gte?: InputMaybe<Scalars['String']['input']>;
  channelId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  channelId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  channelId_lt?: InputMaybe<Scalars['String']['input']>;
  channelId_lte?: InputMaybe<Scalars['String']['input']>;
  channelId_not_contains?: InputMaybe<Scalars['String']['input']>;
  channelId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  channelId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_not_eq?: InputMaybe<Scalars['String']['input']>;
  channelId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  channelId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  channelId_startsWith?: InputMaybe<Scalars['String']['input']>;
  daoId_eq?: InputMaybe<Scalars['Int']['input']>;
  daoId_gt?: InputMaybe<Scalars['Int']['input']>;
  daoId_gte?: InputMaybe<Scalars['Int']['input']>;
  daoId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  daoId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  daoId_lt?: InputMaybe<Scalars['Int']['input']>;
  daoId_lte?: InputMaybe<Scalars['Int']['input']>;
  daoId_not_eq?: InputMaybe<Scalars['Int']['input']>;
  daoId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  memberId_contains?: InputMaybe<Scalars['String']['input']>;
  memberId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  memberId_endsWith?: InputMaybe<Scalars['String']['input']>;
  memberId_eq?: InputMaybe<Scalars['String']['input']>;
  memberId_gt?: InputMaybe<Scalars['String']['input']>;
  memberId_gte?: InputMaybe<Scalars['String']['input']>;
  memberId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  memberId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  memberId_lt?: InputMaybe<Scalars['String']['input']>;
  memberId_lte?: InputMaybe<Scalars['String']['input']>;
  memberId_not_contains?: InputMaybe<Scalars['String']['input']>;
  memberId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  memberId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  memberId_not_eq?: InputMaybe<Scalars['String']['input']>;
  memberId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  memberId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  memberId_startsWith?: InputMaybe<Scalars['String']['input']>;
  phantom_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_gt?: InputMaybe<Scalars['Int']['input']>;
  phantom_gte?: InputMaybe<Scalars['Int']['input']>;
  phantom_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  phantom_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_lt?: InputMaybe<Scalars['Int']['input']>;
  phantom_lte?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workingGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_endsWith?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_eq?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_gt?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_gte?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workingGroupId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  workingGroupId_lt?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_lte?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_not_eq?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workingGroupId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  workingGroupId_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StorageBagOwnerWorkingGroup = {
  __typename?: 'StorageBagOwnerWorkingGroup';
  workingGroupId?: Maybe<Scalars['String']['output']>;
};

export type StorageBagWhereInput = {
  AND?: InputMaybe<Array<StorageBagWhereInput>>;
  OR?: InputMaybe<Array<StorageBagWhereInput>>;
  distributionBuckets_every?: InputMaybe<DistributionBucketBagWhereInput>;
  distributionBuckets_none?: InputMaybe<DistributionBucketBagWhereInput>;
  distributionBuckets_some?: InputMaybe<DistributionBucketBagWhereInput>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  objects_every?: InputMaybe<StorageDataObjectWhereInput>;
  objects_none?: InputMaybe<StorageDataObjectWhereInput>;
  objects_some?: InputMaybe<StorageDataObjectWhereInput>;
  owner?: InputMaybe<StorageBagOwnerWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  storageBuckets_every?: InputMaybe<StorageBucketBagWhereInput>;
  storageBuckets_none?: InputMaybe<StorageBucketBagWhereInput>;
  storageBuckets_some?: InputMaybe<StorageBucketBagWhereInput>;
};

export type StorageBagsConnection = {
  __typename?: 'StorageBagsConnection';
  edges: Array<StorageBagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StorageBucket = {
  __typename?: 'StorageBucket';
  /** Whether the bucket is accepting any new storage bags */
  acceptingNewBags: Scalars['Boolean']['output'];
  /** Storage bags assigned to the bucket */
  bags: Array<StorageBucketBag>;
  /** Bucket's data object count limit */
  dataObjectCountLimit: Scalars['BigInt']['output'];
  /** Number of assigned data objects */
  dataObjectsCount: Scalars['BigInt']['output'];
  /** Total size of assigned data objects */
  dataObjectsSize: Scalars['BigInt']['output'];
  /** Bucket's data object size limit in bytes */
  dataObjectsSizeLimit: Scalars['BigInt']['output'];
  /** Runtime bucket id */
  id: Scalars['String']['output'];
  /** Storage bucket operator metadata */
  operatorMetadata?: Maybe<StorageBucketOperatorMetadata>;
  /** Current bucket operator status */
  operatorStatus: StorageBucketOperatorStatus;
};


export type StorageBucketBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketBagOrderByInput>>;
  where?: InputMaybe<StorageBucketBagWhereInput>;
};

export type StorageBucketBag = {
  __typename?: 'StorageBucketBag';
  bag: StorageBag;
  /** {storageBucketId}-{storageBagId} */
  id: Scalars['String']['output'];
  storageBucket: StorageBucket;
};

export type StorageBucketBagEdge = {
  __typename?: 'StorageBucketBagEdge';
  cursor: Scalars['String']['output'];
  node: StorageBucketBag;
};

export enum StorageBucketBagOrderByInput {
  BagIdAsc = 'bag_id_ASC',
  BagIdDesc = 'bag_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StorageBucketAcceptingNewBagsAsc = 'storageBucket_acceptingNewBags_ASC',
  StorageBucketAcceptingNewBagsDesc = 'storageBucket_acceptingNewBags_DESC',
  StorageBucketDataObjectCountLimitAsc = 'storageBucket_dataObjectCountLimit_ASC',
  StorageBucketDataObjectCountLimitDesc = 'storageBucket_dataObjectCountLimit_DESC',
  StorageBucketDataObjectsCountAsc = 'storageBucket_dataObjectsCount_ASC',
  StorageBucketDataObjectsCountDesc = 'storageBucket_dataObjectsCount_DESC',
  StorageBucketDataObjectsSizeLimitAsc = 'storageBucket_dataObjectsSizeLimit_ASC',
  StorageBucketDataObjectsSizeLimitDesc = 'storageBucket_dataObjectsSizeLimit_DESC',
  StorageBucketDataObjectsSizeAsc = 'storageBucket_dataObjectsSize_ASC',
  StorageBucketDataObjectsSizeDesc = 'storageBucket_dataObjectsSize_DESC',
  StorageBucketIdAsc = 'storageBucket_id_ASC',
  StorageBucketIdDesc = 'storageBucket_id_DESC'
}

export type StorageBucketBagWhereInput = {
  AND?: InputMaybe<Array<StorageBucketBagWhereInput>>;
  OR?: InputMaybe<Array<StorageBucketBagWhereInput>>;
  bag?: InputMaybe<StorageBagWhereInput>;
  bag_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  storageBucket?: InputMaybe<StorageBucketWhereInput>;
  storageBucket_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StorageBucketBagsConnection = {
  __typename?: 'StorageBucketBagsConnection';
  edges: Array<StorageBucketBagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StorageBucketEdge = {
  __typename?: 'StorageBucketEdge';
  cursor: Scalars['String']['output'];
  node: StorageBucket;
};

export type StorageBucketOperatorMetadata = {
  __typename?: 'StorageBucketOperatorMetadata';
  /** Additional information about the node/operator */
  extra?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Root node endpoint */
  nodeEndpoint?: Maybe<Scalars['String']['output']>;
  /** Optional node location metadata */
  nodeLocation?: Maybe<NodeLocationMetadata>;
  /** Storage bucket to which the metadata is assigned */
  storageBucket: StorageBucket;
};

export type StorageBucketOperatorMetadataConnection = {
  __typename?: 'StorageBucketOperatorMetadataConnection';
  edges: Array<StorageBucketOperatorMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StorageBucketOperatorMetadataEdge = {
  __typename?: 'StorageBucketOperatorMetadataEdge';
  cursor: Scalars['String']['output'];
  node: StorageBucketOperatorMetadata;
};

export enum StorageBucketOperatorMetadataOrderByInput {
  ExtraAsc = 'extra_ASC',
  ExtraDesc = 'extra_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NodeEndpointAsc = 'nodeEndpoint_ASC',
  NodeEndpointDesc = 'nodeEndpoint_DESC',
  NodeLocationCityAsc = 'nodeLocation_city_ASC',
  NodeLocationCityDesc = 'nodeLocation_city_DESC',
  NodeLocationCountryCodeAsc = 'nodeLocation_countryCode_ASC',
  NodeLocationCountryCodeDesc = 'nodeLocation_countryCode_DESC',
  StorageBucketAcceptingNewBagsAsc = 'storageBucket_acceptingNewBags_ASC',
  StorageBucketAcceptingNewBagsDesc = 'storageBucket_acceptingNewBags_DESC',
  StorageBucketDataObjectCountLimitAsc = 'storageBucket_dataObjectCountLimit_ASC',
  StorageBucketDataObjectCountLimitDesc = 'storageBucket_dataObjectCountLimit_DESC',
  StorageBucketDataObjectsCountAsc = 'storageBucket_dataObjectsCount_ASC',
  StorageBucketDataObjectsCountDesc = 'storageBucket_dataObjectsCount_DESC',
  StorageBucketDataObjectsSizeLimitAsc = 'storageBucket_dataObjectsSizeLimit_ASC',
  StorageBucketDataObjectsSizeLimitDesc = 'storageBucket_dataObjectsSizeLimit_DESC',
  StorageBucketDataObjectsSizeAsc = 'storageBucket_dataObjectsSize_ASC',
  StorageBucketDataObjectsSizeDesc = 'storageBucket_dataObjectsSize_DESC',
  StorageBucketIdAsc = 'storageBucket_id_ASC',
  StorageBucketIdDesc = 'storageBucket_id_DESC'
}

export type StorageBucketOperatorMetadataWhereInput = {
  AND?: InputMaybe<Array<StorageBucketOperatorMetadataWhereInput>>;
  OR?: InputMaybe<Array<StorageBucketOperatorMetadataWhereInput>>;
  extra_contains?: InputMaybe<Scalars['String']['input']>;
  extra_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  extra_endsWith?: InputMaybe<Scalars['String']['input']>;
  extra_eq?: InputMaybe<Scalars['String']['input']>;
  extra_gt?: InputMaybe<Scalars['String']['input']>;
  extra_gte?: InputMaybe<Scalars['String']['input']>;
  extra_in?: InputMaybe<Array<Scalars['String']['input']>>;
  extra_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  extra_lt?: InputMaybe<Scalars['String']['input']>;
  extra_lte?: InputMaybe<Scalars['String']['input']>;
  extra_not_contains?: InputMaybe<Scalars['String']['input']>;
  extra_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  extra_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  extra_not_eq?: InputMaybe<Scalars['String']['input']>;
  extra_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  extra_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  extra_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_contains?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_endsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_eq?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_gt?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_gte?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeEndpoint_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  nodeEndpoint_lt?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_lte?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_contains?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_eq?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeEndpoint_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  nodeEndpoint_startsWith?: InputMaybe<Scalars['String']['input']>;
  nodeLocation?: InputMaybe<NodeLocationMetadataWhereInput>;
  nodeLocation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  storageBucket?: InputMaybe<StorageBucketWhereInput>;
  storageBucket_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StorageBucketOperatorStatus = StorageBucketOperatorStatusActive | StorageBucketOperatorStatusInvited | StorageBucketOperatorStatusMissing;

export type StorageBucketOperatorStatusActive = {
  __typename?: 'StorageBucketOperatorStatusActive';
  transactorAccountId: Scalars['String']['output'];
  workerId: Scalars['Int']['output'];
};

export type StorageBucketOperatorStatusInvited = {
  __typename?: 'StorageBucketOperatorStatusInvited';
  workerId: Scalars['Int']['output'];
};

export type StorageBucketOperatorStatusMissing = {
  __typename?: 'StorageBucketOperatorStatusMissing';
  phantom?: Maybe<Scalars['Int']['output']>;
};

export type StorageBucketOperatorStatusWhereInput = {
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  phantom_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_gt?: InputMaybe<Scalars['Int']['input']>;
  phantom_gte?: InputMaybe<Scalars['Int']['input']>;
  phantom_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  phantom_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_lt?: InputMaybe<Scalars['Int']['input']>;
  phantom_lte?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transactorAccountId_contains?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_endsWith?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_eq?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_gt?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_gte?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transactorAccountId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  transactorAccountId_lt?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_lte?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_not_eq?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transactorAccountId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  transactorAccountId_startsWith?: InputMaybe<Scalars['String']['input']>;
  workerId_eq?: InputMaybe<Scalars['Int']['input']>;
  workerId_gt?: InputMaybe<Scalars['Int']['input']>;
  workerId_gte?: InputMaybe<Scalars['Int']['input']>;
  workerId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workerId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  workerId_lt?: InputMaybe<Scalars['Int']['input']>;
  workerId_lte?: InputMaybe<Scalars['Int']['input']>;
  workerId_not_eq?: InputMaybe<Scalars['Int']['input']>;
  workerId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum StorageBucketOrderByInput {
  AcceptingNewBagsAsc = 'acceptingNewBags_ASC',
  AcceptingNewBagsDesc = 'acceptingNewBags_DESC',
  DataObjectCountLimitAsc = 'dataObjectCountLimit_ASC',
  DataObjectCountLimitDesc = 'dataObjectCountLimit_DESC',
  DataObjectsCountAsc = 'dataObjectsCount_ASC',
  DataObjectsCountDesc = 'dataObjectsCount_DESC',
  DataObjectsSizeLimitAsc = 'dataObjectsSizeLimit_ASC',
  DataObjectsSizeLimitDesc = 'dataObjectsSizeLimit_DESC',
  DataObjectsSizeAsc = 'dataObjectsSize_ASC',
  DataObjectsSizeDesc = 'dataObjectsSize_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OperatorMetadataExtraAsc = 'operatorMetadata_extra_ASC',
  OperatorMetadataExtraDesc = 'operatorMetadata_extra_DESC',
  OperatorMetadataIdAsc = 'operatorMetadata_id_ASC',
  OperatorMetadataIdDesc = 'operatorMetadata_id_DESC',
  OperatorMetadataNodeEndpointAsc = 'operatorMetadata_nodeEndpoint_ASC',
  OperatorMetadataNodeEndpointDesc = 'operatorMetadata_nodeEndpoint_DESC',
  OperatorStatusIsTypeOfAsc = 'operatorStatus_isTypeOf_ASC',
  OperatorStatusIsTypeOfDesc = 'operatorStatus_isTypeOf_DESC',
  OperatorStatusPhantomAsc = 'operatorStatus_phantom_ASC',
  OperatorStatusPhantomDesc = 'operatorStatus_phantom_DESC',
  OperatorStatusTransactorAccountIdAsc = 'operatorStatus_transactorAccountId_ASC',
  OperatorStatusTransactorAccountIdDesc = 'operatorStatus_transactorAccountId_DESC',
  OperatorStatusWorkerIdAsc = 'operatorStatus_workerId_ASC',
  OperatorStatusWorkerIdDesc = 'operatorStatus_workerId_DESC'
}

export type StorageBucketWhereInput = {
  AND?: InputMaybe<Array<StorageBucketWhereInput>>;
  OR?: InputMaybe<Array<StorageBucketWhereInput>>;
  acceptingNewBags_eq?: InputMaybe<Scalars['Boolean']['input']>;
  acceptingNewBags_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  acceptingNewBags_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  bags_every?: InputMaybe<StorageBucketBagWhereInput>;
  bags_none?: InputMaybe<StorageBucketBagWhereInput>;
  bags_some?: InputMaybe<StorageBucketBagWhereInput>;
  dataObjectCountLimit_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectCountLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectCountLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectCountLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataObjectCountLimit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dataObjectCountLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectCountLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectCountLimit_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectCountLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataObjectsCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataObjectsCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dataObjectsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataObjectsSizeLimit_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSizeLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSizeLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSizeLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataObjectsSizeLimit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dataObjectsSizeLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSizeLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSizeLimit_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSizeLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataObjectsSize_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataObjectsSize_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dataObjectsSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSize_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dataObjectsSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  operatorMetadata?: InputMaybe<StorageBucketOperatorMetadataWhereInput>;
  operatorMetadata_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  operatorStatus?: InputMaybe<StorageBucketOperatorStatusWhereInput>;
  operatorStatus_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StorageBucketsConnection = {
  __typename?: 'StorageBucketsConnection';
  edges: Array<StorageBucketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StorageDataObject = {
  __typename?: 'StorageDataObject';
  /** Timestamp of the block the data object was created at */
  createdAt: Scalars['DateTime']['output'];
  /** Data object runtime id */
  id: Scalars['String']['output'];
  /** IPFS content hash */
  ipfsHash: Scalars['String']['output'];
  /** Whether the data object was uploaded and accepted by the storage provider */
  isAccepted: Scalars['Boolean']['output'];
  /** Resolved asset urls */
  resolvedUrls: Array<Scalars['String']['output']>;
  /** Data object size in bytes */
  size: Scalars['BigInt']['output'];
  /** State Bloat Bond for removing the data object */
  stateBloatBond: Scalars['BigInt']['output'];
  /** Storage bag the data object is part of */
  storageBag: StorageBag;
  /** The type of the asset that the data object represents (if known) */
  type?: Maybe<DataObjectType>;
  /** If the object is no longer used as an asset - the time at which it was unset (if known) */
  unsetAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorageDataObjectEdge = {
  __typename?: 'StorageDataObjectEdge';
  cursor: Scalars['String']['output'];
  node: StorageDataObject;
};

export enum StorageDataObjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IpfsHashAsc = 'ipfsHash_ASC',
  IpfsHashDesc = 'ipfsHash_DESC',
  IsAcceptedAsc = 'isAccepted_ASC',
  IsAcceptedDesc = 'isAccepted_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  StateBloatBondAsc = 'stateBloatBond_ASC',
  StateBloatBondDesc = 'stateBloatBond_DESC',
  StorageBagIdAsc = 'storageBag_id_ASC',
  StorageBagIdDesc = 'storageBag_id_DESC',
  TypeIsTypeOfAsc = 'type_isTypeOf_ASC',
  TypeIsTypeOfDesc = 'type_isTypeOf_DESC',
  TypePhantomAsc = 'type_phantom_ASC',
  TypePhantomDesc = 'type_phantom_DESC',
  UnsetAtAsc = 'unsetAt_ASC',
  UnsetAtDesc = 'unsetAt_DESC'
}

export type StorageDataObjectWhereInput = {
  AND?: InputMaybe<Array<StorageDataObjectWhereInput>>;
  OR?: InputMaybe<Array<StorageDataObjectWhereInput>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_endsWith?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_eq?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_eq?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_startsWith?: InputMaybe<Scalars['String']['input']>;
  isAccepted_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isAccepted_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isAccepted_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  resolvedUrls_containsAll?: InputMaybe<Array<Scalars['String']['input']>>;
  resolvedUrls_containsAny?: InputMaybe<Array<Scalars['String']['input']>>;
  resolvedUrls_containsNone?: InputMaybe<Array<Scalars['String']['input']>>;
  resolvedUrls_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  size_eq?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stateBloatBond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  stateBloatBond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stateBloatBond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stateBloatBond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stateBloatBond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stateBloatBond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stateBloatBond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stateBloatBond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  stateBloatBond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  storageBag?: InputMaybe<StorageBagWhereInput>;
  storageBag_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<DataObjectTypeWhereInput>;
  type_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  unsetAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  unsetAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  unsetAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  unsetAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  unsetAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  unsetAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  unsetAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  unsetAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  unsetAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type StorageDataObjectsConnection = {
  __typename?: 'StorageDataObjectsConnection';
  edges: Array<StorageDataObjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  appById?: Maybe<App>;
  apps: Array<App>;
  auctionById?: Maybe<Auction>;
  auctionWhitelistedMemberById?: Maybe<AuctionWhitelistedMember>;
  auctionWhitelistedMembers: Array<AuctionWhitelistedMember>;
  auctions: Array<Auction>;
  bannedMemberById?: Maybe<BannedMember>;
  bannedMembers: Array<BannedMember>;
  bidById?: Maybe<Bid>;
  bids: Array<Bid>;
  channelById?: Maybe<Channel>;
  channelFollowById?: Maybe<ChannelFollow>;
  channelFollows: Array<ChannelFollow>;
  channels: Array<Channel>;
  commentById?: Maybe<Comment>;
  commentReactionById?: Maybe<CommentReaction>;
  commentReactions: Array<CommentReaction>;
  comments: Array<Comment>;
  curatorById?: Maybe<Curator>;
  curatorGroupById?: Maybe<CuratorGroup>;
  curatorGroups: Array<CuratorGroup>;
  curators: Array<Curator>;
  distributionBucketBagById?: Maybe<DistributionBucketBag>;
  distributionBucketBags: Array<DistributionBucketBag>;
  distributionBucketById?: Maybe<DistributionBucket>;
  distributionBucketFamilies: Array<DistributionBucketFamily>;
  distributionBucketFamilyById?: Maybe<DistributionBucketFamily>;
  distributionBucketFamilyMetadata: Array<DistributionBucketFamilyMetadata>;
  distributionBucketFamilyMetadataById?: Maybe<DistributionBucketFamilyMetadata>;
  distributionBucketOperatorById?: Maybe<DistributionBucketOperator>;
  distributionBucketOperatorMetadata: Array<DistributionBucketOperatorMetadata>;
  distributionBucketOperatorMetadataById?: Maybe<DistributionBucketOperatorMetadata>;
  distributionBucketOperators: Array<DistributionBucketOperator>;
  distributionBuckets: Array<DistributionBucket>;
  eventById?: Maybe<Event>;
  events: Array<Event>;
  licenseById?: Maybe<License>;
  licenses: Array<License>;
  memberMetadata: Array<MemberMetadata>;
  memberMetadataById?: Maybe<MemberMetadata>;
  membershipById?: Maybe<Membership>;
  memberships: Array<Membership>;
  nftActivities: Array<NftActivity>;
  nftActivityById?: Maybe<NftActivity>;
  nftFeaturingRequestById?: Maybe<NftFeaturingRequest>;
  nftFeaturingRequests: Array<NftFeaturingRequest>;
  nftHistoryEntries: Array<NftHistoryEntry>;
  nftHistoryEntryById?: Maybe<NftHistoryEntry>;
  notificationById?: Maybe<Notification>;
  notifications: Array<Notification>;
  ownedNftById?: Maybe<OwnedNft>;
  ownedNfts: Array<OwnedNft>;
  processorState: ProcessorState;
  reportById?: Maybe<Report>;
  reports: Array<Report>;
  storageBagById?: Maybe<StorageBag>;
  storageBags: Array<StorageBag>;
  storageBucketBagById?: Maybe<StorageBucketBag>;
  storageBucketBags: Array<StorageBucketBag>;
  storageBucketById?: Maybe<StorageBucket>;
  storageBucketOperatorMetadata: Array<StorageBucketOperatorMetadata>;
  storageBucketOperatorMetadataById?: Maybe<StorageBucketOperatorMetadata>;
  storageBuckets: Array<StorageBucket>;
  storageDataObjectById?: Maybe<StorageDataObject>;
  storageDataObjects: Array<StorageDataObject>;
  videoById?: Maybe<Video>;
  videoCategories: Array<VideoCategory>;
  videoCategoryById?: Maybe<VideoCategory>;
  videoFeaturedInCategories: Array<VideoFeaturedInCategory>;
  videoFeaturedInCategoryById?: Maybe<VideoFeaturedInCategory>;
  videoHeroById?: Maybe<VideoHero>;
  videoHeros: Array<VideoHero>;
  videoMediaEncodingById?: Maybe<VideoMediaEncoding>;
  videoMediaEncodings: Array<VideoMediaEncoding>;
  videoMediaMetadata: Array<VideoMediaMetadata>;
  videoMediaMetadataById?: Maybe<VideoMediaMetadata>;
  videoReactionById?: Maybe<VideoReaction>;
  videoReactions: Array<VideoReaction>;
  videoSubtitleById?: Maybe<VideoSubtitle>;
  videoSubtitles: Array<VideoSubtitle>;
  videoViewEventById?: Maybe<VideoViewEvent>;
  videoViewEvents: Array<VideoViewEvent>;
  videos: Array<Video>;
};


export type SubscriptionAppByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAppsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppOrderByInput>>;
  where?: InputMaybe<AppWhereInput>;
};


export type SubscriptionAuctionByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAuctionWhitelistedMemberByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAuctionWhitelistedMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuctionWhitelistedMemberOrderByInput>>;
  where?: InputMaybe<AuctionWhitelistedMemberWhereInput>;
};


export type SubscriptionAuctionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuctionOrderByInput>>;
  where?: InputMaybe<AuctionWhereInput>;
};


export type SubscriptionBannedMemberByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionBannedMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BannedMemberOrderByInput>>;
  where?: InputMaybe<BannedMemberWhereInput>;
};


export type SubscriptionBidByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionBidsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BidOrderByInput>>;
  where?: InputMaybe<BidWhereInput>;
};


export type SubscriptionChannelByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionChannelFollowByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionChannelFollowsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelFollowOrderByInput>>;
  where?: InputMaybe<ChannelFollowWhereInput>;
};


export type SubscriptionChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>;
  where?: InputMaybe<ChannelWhereInput>;
};


export type SubscriptionCommentByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionCommentReactionByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionCommentReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionOrderByInput>>;
  where?: InputMaybe<CommentReactionWhereInput>;
};


export type SubscriptionCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderByInput>>;
  where?: InputMaybe<CommentWhereInput>;
};


export type SubscriptionCuratorByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionCuratorGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionCuratorGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CuratorGroupOrderByInput>>;
  where?: InputMaybe<CuratorGroupWhereInput>;
};


export type SubscriptionCuratorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CuratorOrderByInput>>;
  where?: InputMaybe<CuratorWhereInput>;
};


export type SubscriptionDistributionBucketBagByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDistributionBucketBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketBagOrderByInput>>;
  where?: InputMaybe<DistributionBucketBagWhereInput>;
};


export type SubscriptionDistributionBucketByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDistributionBucketFamiliesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketFamilyOrderByInput>>;
  where?: InputMaybe<DistributionBucketFamilyWhereInput>;
};


export type SubscriptionDistributionBucketFamilyByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDistributionBucketFamilyMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketFamilyMetadataOrderByInput>>;
  where?: InputMaybe<DistributionBucketFamilyMetadataWhereInput>;
};


export type SubscriptionDistributionBucketFamilyMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDistributionBucketOperatorByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDistributionBucketOperatorMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOperatorMetadataOrderByInput>>;
  where?: InputMaybe<DistributionBucketOperatorMetadataWhereInput>;
};


export type SubscriptionDistributionBucketOperatorMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDistributionBucketOperatorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOperatorOrderByInput>>;
  where?: InputMaybe<DistributionBucketOperatorWhereInput>;
};


export type SubscriptionDistributionBucketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DistributionBucketOrderByInput>>;
  where?: InputMaybe<DistributionBucketWhereInput>;
};


export type SubscriptionEventByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderByInput>>;
  where?: InputMaybe<EventWhereInput>;
};


export type SubscriptionLicenseByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionLicensesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LicenseOrderByInput>>;
  where?: InputMaybe<LicenseWhereInput>;
};


export type SubscriptionMemberMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemberMetadataOrderByInput>>;
  where?: InputMaybe<MemberMetadataWhereInput>;
};


export type SubscriptionMemberMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionMembershipByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionMembershipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MembershipOrderByInput>>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type SubscriptionNftActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftActivityOrderByInput>>;
  where?: InputMaybe<NftActivityWhereInput>;
};


export type SubscriptionNftActivityByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionNftFeaturingRequestByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionNftFeaturingRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFeaturingRequestOrderByInput>>;
  where?: InputMaybe<NftFeaturingRequestWhereInput>;
};


export type SubscriptionNftHistoryEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftHistoryEntryOrderByInput>>;
  where?: InputMaybe<NftHistoryEntryWhereInput>;
};


export type SubscriptionNftHistoryEntryByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionNotificationByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotificationOrderByInput>>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type SubscriptionOwnedNftByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionOwnedNftsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OwnedNftOrderByInput>>;
  where?: InputMaybe<OwnedNftWhereInput>;
};


export type SubscriptionReportByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionReportsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReportOrderByInput>>;
  where?: InputMaybe<ReportWhereInput>;
};


export type SubscriptionStorageBagByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionStorageBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBagOrderByInput>>;
  where?: InputMaybe<StorageBagWhereInput>;
};


export type SubscriptionStorageBucketBagByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionStorageBucketBagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketBagOrderByInput>>;
  where?: InputMaybe<StorageBucketBagWhereInput>;
};


export type SubscriptionStorageBucketByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionStorageBucketOperatorMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketOperatorMetadataOrderByInput>>;
  where?: InputMaybe<StorageBucketOperatorMetadataWhereInput>;
};


export type SubscriptionStorageBucketOperatorMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionStorageBucketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageBucketOrderByInput>>;
  where?: InputMaybe<StorageBucketWhereInput>;
};


export type SubscriptionStorageDataObjectByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionStorageDataObjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StorageDataObjectOrderByInput>>;
  where?: InputMaybe<StorageDataObjectWhereInput>;
};


export type SubscriptionVideoByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoCategoryOrderByInput>>;
  where?: InputMaybe<VideoCategoryWhereInput>;
};


export type SubscriptionVideoCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoFeaturedInCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoFeaturedInCategoryOrderByInput>>;
  where?: InputMaybe<VideoFeaturedInCategoryWhereInput>;
};


export type SubscriptionVideoFeaturedInCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoHeroByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoHerosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoHeroOrderByInput>>;
  where?: InputMaybe<VideoHeroWhereInput>;
};


export type SubscriptionVideoMediaEncodingByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoMediaEncodingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoMediaEncodingOrderByInput>>;
  where?: InputMaybe<VideoMediaEncodingWhereInput>;
};


export type SubscriptionVideoMediaMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoMediaMetadataOrderByInput>>;
  where?: InputMaybe<VideoMediaMetadataWhereInput>;
};


export type SubscriptionVideoMediaMetadataByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoReactionByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoReactionOrderByInput>>;
  where?: InputMaybe<VideoReactionWhereInput>;
};


export type SubscriptionVideoSubtitleByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoSubtitlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoSubtitleOrderByInput>>;
  where?: InputMaybe<VideoSubtitleWhereInput>;
};


export type SubscriptionVideoViewEventByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionVideoViewEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoViewEventOrderByInput>>;
  where?: InputMaybe<VideoViewEventWhereInput>;
};


export type SubscriptionVideosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoOrderByInput>>;
  where?: InputMaybe<VideoWhereInput>;
};

export type TopSellingChannelsResult = {
  __typename?: 'TopSellingChannelsResult';
  amount: Scalars['String']['output'];
  channel: Channel;
  nftSold: Scalars['Int']['output'];
};

/** NFT transactional state */
export type TransactionalStatus = TransactionalStatusAuction | TransactionalStatusBuyNow | TransactionalStatusIdle | TransactionalStatusInitiatedOfferToMember;

/** Represents TransactionalStatus Auction */
export type TransactionalStatusAuction = {
  __typename?: 'TransactionalStatusAuction';
  auction: Auction;
};

/** Represents TransactionalStatus BuyNow */
export type TransactionalStatusBuyNow = {
  __typename?: 'TransactionalStatusBuyNow';
  price: Scalars['BigInt']['output'];
};

/** Represents TransactionalStatus Idle */
export type TransactionalStatusIdle = {
  __typename?: 'TransactionalStatusIdle';
  phantom?: Maybe<Scalars['Int']['output']>;
};

/** Represents TransactionalStatus InitiatedOfferToMember */
export type TransactionalStatusInitiatedOfferToMember = {
  __typename?: 'TransactionalStatusInitiatedOfferToMember';
  /** Member that recieved the offer */
  member: Membership;
  /** The price that the member should pay to accept offer (optional) */
  price?: Maybe<Scalars['BigInt']['output']>;
};

export type TransactionalStatusWhereInput = {
  auction?: InputMaybe<AuctionWhereInput>;
  auction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_gt?: InputMaybe<Scalars['Int']['input']>;
  phantom_gte?: InputMaybe<Scalars['Int']['input']>;
  phantom_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  phantom_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phantom_lt?: InputMaybe<Scalars['Int']['input']>;
  phantom_lte?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_eq?: InputMaybe<Scalars['Int']['input']>;
  phantom_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  price_eq?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Video = {
  __typename?: 'Video';
  /** Reference to a video category */
  category?: Maybe<VideoCategory>;
  /** Reference to videos's channel */
  channel: Channel;
  /** List of all video comments */
  comments: Array<Comment>;
  /** Comments count */
  commentsCount: Scalars['Int']['output'];
  /** Timestamp of the block the video was created at */
  createdAt: Scalars['DateTime']['output'];
  /** Block the video was created in */
  createdInBlock: Scalars['Int']['output'];
  /** The description of the Video */
  description?: Maybe<Scalars['String']['output']>;
  /** Video duration in seconds */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Application used for video creation */
  entryApp?: Maybe<App>;
  /** Whether or not Video contains marketing */
  hasMarketing?: Maybe<Scalars['Boolean']['output']>;
  /** Runtime identifier */
  id: Scalars['String']['output'];
  /** Flag signaling whether a video is censored. */
  isCensored: Scalars['Boolean']['output'];
  /** Is comment section enabled (true if enabled) */
  isCommentSectionEnabled: Scalars['Boolean']['output'];
  /** Whether a video has been excluded/hidden (by the gateway operator) */
  isExcluded: Scalars['Boolean']['output'];
  /** Whether the Video contains explicit material. */
  isExplicit?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the Video is supposed to be publically displayed */
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  /** Is reactions feature enabled on video (true if enabled i.e. video can be reacted) */
  isReactionFeatureEnabled: Scalars['Boolean']['output'];
  /** Video's main langauge */
  language?: Maybe<Scalars['String']['output']>;
  /** License under the video is published */
  license?: Maybe<License>;
  /** Video media asset */
  media?: Maybe<StorageDataObject>;
  /** Video file metadata */
  mediaMetadata?: Maybe<VideoMediaMetadata>;
  /** Video NFT details */
  nft?: Maybe<OwnedNft>;
  /** channel owner pinned comment */
  pinnedComment?: Maybe<Comment>;
  /** If the Video was published on other platform before beeing published on Joystream - the original publication date */
  publishedBeforeJoystream?: Maybe<Scalars['DateTime']['output']>;
  /** List of all video reactions */
  reactions: Array<VideoReaction>;
  /** Reactions count */
  reactionsCount: Scalars['Int']['output'];
  /** Reactions count by reaction Id */
  reactionsCountByReactionId?: Maybe<Array<VideoReactionsCountByReactionType>>;
  /** List of video subtitles */
  subtitles: Array<VideoSubtitle>;
  /** Video thumbnail asset (recommended ratio: 16:9) */
  thumbnailPhoto?: Maybe<StorageDataObject>;
  /** The title of the video */
  title?: Maybe<Scalars['String']['output']>;
  /** Video relevance score based on the views, reactions, comments and update date */
  videoRelevance: Scalars['Float']['output'];
  /** Value of video state bloat bond fee paid by channel owner */
  videoStateBloatBond: Scalars['BigInt']['output'];
  /** Number of video views (to speed up orderBy queries by avoiding COUNT aggregation) */
  viewsNum: Scalars['Int']['output'];
  /** Video ID coming from YPP */
  ytVideoId?: Maybe<Scalars['String']['output']>;
};


export type VideoCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderByInput>>;
  where?: InputMaybe<CommentWhereInput>;
};


export type VideoReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoReactionOrderByInput>>;
  where?: InputMaybe<VideoReactionWhereInput>;
};


export type VideoSubtitlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoSubtitleOrderByInput>>;
  where?: InputMaybe<VideoSubtitleWhereInput>;
};

export type VideoCategoriesConnection = {
  __typename?: 'VideoCategoriesConnection';
  edges: Array<VideoCategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoCategory = {
  __typename?: 'VideoCategory';
  createdInBlock: Scalars['Int']['output'];
  /** The description of the category */
  description?: Maybe<Scalars['String']['output']>;
  featuredVideos: Array<VideoFeaturedInCategory>;
  /** Runtime identifier */
  id: Scalars['String']['output'];
  /** Indicates whether the category is supported by the Gateway */
  isSupported: Scalars['Boolean']['output'];
  /** The name of the category */
  name?: Maybe<Scalars['String']['output']>;
  /** Parent category if defined */
  parentCategory?: Maybe<VideoCategory>;
  videos: Array<Video>;
};


export type VideoCategoryFeaturedVideosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoFeaturedInCategoryOrderByInput>>;
  where?: InputMaybe<VideoFeaturedInCategoryWhereInput>;
};


export type VideoCategoryVideosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VideoOrderByInput>>;
  where?: InputMaybe<VideoWhereInput>;
};

export type VideoCategoryEdge = {
  __typename?: 'VideoCategoryEdge';
  cursor: Scalars['String']['output'];
  node: VideoCategory;
};

export enum VideoCategoryOrderByInput {
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsSupportedAsc = 'isSupported_ASC',
  IsSupportedDesc = 'isSupported_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ParentCategoryCreatedInBlockAsc = 'parentCategory_createdInBlock_ASC',
  ParentCategoryCreatedInBlockDesc = 'parentCategory_createdInBlock_DESC',
  ParentCategoryDescriptionAsc = 'parentCategory_description_ASC',
  ParentCategoryDescriptionDesc = 'parentCategory_description_DESC',
  ParentCategoryIdAsc = 'parentCategory_id_ASC',
  ParentCategoryIdDesc = 'parentCategory_id_DESC',
  ParentCategoryIsSupportedAsc = 'parentCategory_isSupported_ASC',
  ParentCategoryIsSupportedDesc = 'parentCategory_isSupported_DESC',
  ParentCategoryNameAsc = 'parentCategory_name_ASC',
  ParentCategoryNameDesc = 'parentCategory_name_DESC'
}

export type VideoCategoryWhereInput = {
  AND?: InputMaybe<Array<VideoCategoryWhereInput>>;
  OR?: InputMaybe<Array<VideoCategoryWhereInput>>;
  createdInBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdInBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdInBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_eq?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_not_eq?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  description_startsWith?: InputMaybe<Scalars['String']['input']>;
  featuredVideos_every?: InputMaybe<VideoFeaturedInCategoryWhereInput>;
  featuredVideos_none?: InputMaybe<VideoFeaturedInCategoryWhereInput>;
  featuredVideos_some?: InputMaybe<VideoFeaturedInCategoryWhereInput>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isSupported_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isSupported_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isSupported_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_startsWith?: InputMaybe<Scalars['String']['input']>;
  parentCategory?: InputMaybe<VideoCategoryWhereInput>;
  parentCategory_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  videos_every?: InputMaybe<VideoWhereInput>;
  videos_none?: InputMaybe<VideoWhereInput>;
  videos_some?: InputMaybe<VideoWhereInput>;
};

export type VideoEdge = {
  __typename?: 'VideoEdge';
  cursor: Scalars['String']['output'];
  node: Video;
};

export type VideoFeaturedInCategoriesConnection = {
  __typename?: 'VideoFeaturedInCategoriesConnection';
  edges: Array<VideoFeaturedInCategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoFeaturedInCategory = {
  __typename?: 'VideoFeaturedInCategory';
  /** Category the video is featured in */
  category: VideoCategory;
  /** {categoryId-videoId} */
  id: Scalars['String']['output'];
  /** Video being featured */
  video: Video;
  /** Url to video fragment to be displayed in the UI */
  videoCutUrl?: Maybe<Scalars['String']['output']>;
};

export type VideoFeaturedInCategoryEdge = {
  __typename?: 'VideoFeaturedInCategoryEdge';
  cursor: Scalars['String']['output'];
  node: VideoFeaturedInCategory;
};

export enum VideoFeaturedInCategoryOrderByInput {
  CategoryCreatedInBlockAsc = 'category_createdInBlock_ASC',
  CategoryCreatedInBlockDesc = 'category_createdInBlock_DESC',
  CategoryDescriptionAsc = 'category_description_ASC',
  CategoryDescriptionDesc = 'category_description_DESC',
  CategoryIdAsc = 'category_id_ASC',
  CategoryIdDesc = 'category_id_DESC',
  CategoryIsSupportedAsc = 'category_isSupported_ASC',
  CategoryIsSupportedDesc = 'category_isSupported_DESC',
  CategoryNameAsc = 'category_name_ASC',
  CategoryNameDesc = 'category_name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VideoCutUrlAsc = 'videoCutUrl_ASC',
  VideoCutUrlDesc = 'videoCutUrl_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type VideoFeaturedInCategoryWhereInput = {
  AND?: InputMaybe<Array<VideoFeaturedInCategoryWhereInput>>;
  OR?: InputMaybe<Array<VideoFeaturedInCategoryWhereInput>>;
  category?: InputMaybe<VideoCategoryWhereInput>;
  category_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<VideoWhereInput>;
  videoCutUrl_contains?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_endsWith?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_eq?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_gt?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_gte?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  videoCutUrl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  videoCutUrl_lt?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_lte?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_not_eq?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  videoCutUrl_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  videoCutUrl_startsWith?: InputMaybe<Scalars['String']['input']>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoHero = {
  __typename?: 'VideoHero';
  /** Time at which this VideoHero was created/activated */
  activatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Url to the poster to be displayed in the Hero section */
  heroPosterUrl: Scalars['String']['output'];
  /** Title of the Hero section */
  heroTitle: Scalars['String']['output'];
  /** Url to video fragment to be displayed in the Hero section */
  heroVideoCutUrl: Scalars['String']['output'];
  /** Unique ID */
  id: Scalars['String']['output'];
  /** Video being featured in the Hero section */
  video: Video;
};

export type VideoHeroEdge = {
  __typename?: 'VideoHeroEdge';
  cursor: Scalars['String']['output'];
  node: VideoHero;
};

export enum VideoHeroOrderByInput {
  ActivatedAtAsc = 'activatedAt_ASC',
  ActivatedAtDesc = 'activatedAt_DESC',
  HeroPosterUrlAsc = 'heroPosterUrl_ASC',
  HeroPosterUrlDesc = 'heroPosterUrl_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HeroVideoCutUrlAsc = 'heroVideoCutUrl_ASC',
  HeroVideoCutUrlDesc = 'heroVideoCutUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type VideoHeroWhereInput = {
  AND?: InputMaybe<Array<VideoHeroWhereInput>>;
  OR?: InputMaybe<Array<VideoHeroWhereInput>>;
  activatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  activatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  activatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  activatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  activatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  activatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  activatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  activatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  activatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  heroPosterUrl_contains?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_endsWith?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_eq?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_gt?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_gte?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  heroPosterUrl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  heroPosterUrl_lt?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_lte?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_not_eq?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  heroPosterUrl_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  heroPosterUrl_startsWith?: InputMaybe<Scalars['String']['input']>;
  heroTitle_contains?: InputMaybe<Scalars['String']['input']>;
  heroTitle_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  heroTitle_endsWith?: InputMaybe<Scalars['String']['input']>;
  heroTitle_eq?: InputMaybe<Scalars['String']['input']>;
  heroTitle_gt?: InputMaybe<Scalars['String']['input']>;
  heroTitle_gte?: InputMaybe<Scalars['String']['input']>;
  heroTitle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  heroTitle_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  heroTitle_lt?: InputMaybe<Scalars['String']['input']>;
  heroTitle_lte?: InputMaybe<Scalars['String']['input']>;
  heroTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroTitle_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  heroTitle_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  heroTitle_not_eq?: InputMaybe<Scalars['String']['input']>;
  heroTitle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  heroTitle_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  heroTitle_startsWith?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_contains?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_endsWith?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_eq?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_gt?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_gte?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  heroVideoCutUrl_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  heroVideoCutUrl_lt?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_lte?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_not_eq?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  heroVideoCutUrl_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  heroVideoCutUrl_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoHerosConnection = {
  __typename?: 'VideoHerosConnection';
  edges: Array<VideoHeroEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoMediaEncoding = {
  __typename?: 'VideoMediaEncoding';
  /** Encoding of the video media object */
  codecName?: Maybe<Scalars['String']['output']>;
  /** Media container format */
  container?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Content MIME type */
  mimeMediaType?: Maybe<Scalars['String']['output']>;
};

export type VideoMediaEncodingEdge = {
  __typename?: 'VideoMediaEncodingEdge';
  cursor: Scalars['String']['output'];
  node: VideoMediaEncoding;
};

export enum VideoMediaEncodingOrderByInput {
  CodecNameAsc = 'codecName_ASC',
  CodecNameDesc = 'codecName_DESC',
  ContainerAsc = 'container_ASC',
  ContainerDesc = 'container_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeMediaTypeAsc = 'mimeMediaType_ASC',
  MimeMediaTypeDesc = 'mimeMediaType_DESC'
}

export type VideoMediaEncodingWhereInput = {
  AND?: InputMaybe<Array<VideoMediaEncodingWhereInput>>;
  OR?: InputMaybe<Array<VideoMediaEncodingWhereInput>>;
  codecName_contains?: InputMaybe<Scalars['String']['input']>;
  codecName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  codecName_endsWith?: InputMaybe<Scalars['String']['input']>;
  codecName_eq?: InputMaybe<Scalars['String']['input']>;
  codecName_gt?: InputMaybe<Scalars['String']['input']>;
  codecName_gte?: InputMaybe<Scalars['String']['input']>;
  codecName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codecName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  codecName_lt?: InputMaybe<Scalars['String']['input']>;
  codecName_lte?: InputMaybe<Scalars['String']['input']>;
  codecName_not_contains?: InputMaybe<Scalars['String']['input']>;
  codecName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  codecName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  codecName_not_eq?: InputMaybe<Scalars['String']['input']>;
  codecName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codecName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  codecName_startsWith?: InputMaybe<Scalars['String']['input']>;
  container_contains?: InputMaybe<Scalars['String']['input']>;
  container_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  container_endsWith?: InputMaybe<Scalars['String']['input']>;
  container_eq?: InputMaybe<Scalars['String']['input']>;
  container_gt?: InputMaybe<Scalars['String']['input']>;
  container_gte?: InputMaybe<Scalars['String']['input']>;
  container_in?: InputMaybe<Array<Scalars['String']['input']>>;
  container_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  container_lt?: InputMaybe<Scalars['String']['input']>;
  container_lte?: InputMaybe<Scalars['String']['input']>;
  container_not_contains?: InputMaybe<Scalars['String']['input']>;
  container_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  container_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  container_not_eq?: InputMaybe<Scalars['String']['input']>;
  container_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  container_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  container_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_contains?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_endsWith?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_eq?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_gt?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_gte?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeMediaType_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  mimeMediaType_lt?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_lte?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_not_contains?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_not_eq?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeMediaType_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  mimeMediaType_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMediaEncodingsConnection = {
  __typename?: 'VideoMediaEncodingsConnection';
  edges: Array<VideoMediaEncodingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoMediaMetadata = {
  __typename?: 'VideoMediaMetadata';
  createdInBlock: Scalars['Int']['output'];
  /** Encoding of the video media object */
  encoding?: Maybe<VideoMediaEncoding>;
  /** Unique identifier */
  id: Scalars['String']['output'];
  /** Video media height in pixels */
  pixelHeight?: Maybe<Scalars['Int']['output']>;
  /** Video media width in pixels */
  pixelWidth?: Maybe<Scalars['Int']['output']>;
  /** Video media size in bytes */
  size?: Maybe<Scalars['BigInt']['output']>;
  video: Video;
};

export type VideoMediaMetadataConnection = {
  __typename?: 'VideoMediaMetadataConnection';
  edges: Array<VideoMediaMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoMediaMetadataEdge = {
  __typename?: 'VideoMediaMetadataEdge';
  cursor: Scalars['String']['output'];
  node: VideoMediaMetadata;
};

export enum VideoMediaMetadataOrderByInput {
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  EncodingCodecNameAsc = 'encoding_codecName_ASC',
  EncodingCodecNameDesc = 'encoding_codecName_DESC',
  EncodingContainerAsc = 'encoding_container_ASC',
  EncodingContainerDesc = 'encoding_container_DESC',
  EncodingIdAsc = 'encoding_id_ASC',
  EncodingIdDesc = 'encoding_id_DESC',
  EncodingMimeMediaTypeAsc = 'encoding_mimeMediaType_ASC',
  EncodingMimeMediaTypeDesc = 'encoding_mimeMediaType_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PixelHeightAsc = 'pixelHeight_ASC',
  PixelHeightDesc = 'pixelHeight_DESC',
  PixelWidthAsc = 'pixelWidth_ASC',
  PixelWidthDesc = 'pixelWidth_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type VideoMediaMetadataWhereInput = {
  AND?: InputMaybe<Array<VideoMediaMetadataWhereInput>>;
  OR?: InputMaybe<Array<VideoMediaMetadataWhereInput>>;
  createdInBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdInBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdInBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  encoding?: InputMaybe<VideoMediaEncodingWhereInput>;
  encoding_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  pixelHeight_eq?: InputMaybe<Scalars['Int']['input']>;
  pixelHeight_gt?: InputMaybe<Scalars['Int']['input']>;
  pixelHeight_gte?: InputMaybe<Scalars['Int']['input']>;
  pixelHeight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pixelHeight_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pixelHeight_lt?: InputMaybe<Scalars['Int']['input']>;
  pixelHeight_lte?: InputMaybe<Scalars['Int']['input']>;
  pixelHeight_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pixelHeight_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pixelWidth_eq?: InputMaybe<Scalars['Int']['input']>;
  pixelWidth_gt?: InputMaybe<Scalars['Int']['input']>;
  pixelWidth_gte?: InputMaybe<Scalars['Int']['input']>;
  pixelWidth_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pixelWidth_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pixelWidth_lt?: InputMaybe<Scalars['Int']['input']>;
  pixelWidth_lte?: InputMaybe<Scalars['Int']['input']>;
  pixelWidth_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pixelWidth_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  size_eq?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VideoOrderByInput {
  CategoryCreatedInBlockAsc = 'category_createdInBlock_ASC',
  CategoryCreatedInBlockDesc = 'category_createdInBlock_DESC',
  CategoryDescriptionAsc = 'category_description_ASC',
  CategoryDescriptionDesc = 'category_description_DESC',
  CategoryIdAsc = 'category_id_ASC',
  CategoryIdDesc = 'category_id_DESC',
  CategoryIsSupportedAsc = 'category_isSupported_ASC',
  CategoryIsSupportedDesc = 'category_isSupported_DESC',
  CategoryNameAsc = 'category_name_ASC',
  CategoryNameDesc = 'category_name_DESC',
  ChannelChannelStateBloatBondAsc = 'channel_channelStateBloatBond_ASC',
  ChannelChannelStateBloatBondDesc = 'channel_channelStateBloatBond_DESC',
  ChannelCreatedAtAsc = 'channel_createdAt_ASC',
  ChannelCreatedAtDesc = 'channel_createdAt_DESC',
  ChannelCreatedInBlockAsc = 'channel_createdInBlock_ASC',
  ChannelCreatedInBlockDesc = 'channel_createdInBlock_DESC',
  ChannelCumulativeRewardClaimedAsc = 'channel_cumulativeRewardClaimed_ASC',
  ChannelCumulativeRewardClaimedDesc = 'channel_cumulativeRewardClaimed_DESC',
  ChannelDescriptionAsc = 'channel_description_ASC',
  ChannelDescriptionDesc = 'channel_description_DESC',
  ChannelFollowsNumAsc = 'channel_followsNum_ASC',
  ChannelFollowsNumDesc = 'channel_followsNum_DESC',
  ChannelIdAsc = 'channel_id_ASC',
  ChannelIdDesc = 'channel_id_DESC',
  ChannelIsCensoredAsc = 'channel_isCensored_ASC',
  ChannelIsCensoredDesc = 'channel_isCensored_DESC',
  ChannelIsExcludedAsc = 'channel_isExcluded_ASC',
  ChannelIsExcludedDesc = 'channel_isExcluded_DESC',
  ChannelIsPublicAsc = 'channel_isPublic_ASC',
  ChannelIsPublicDesc = 'channel_isPublic_DESC',
  ChannelLanguageAsc = 'channel_language_ASC',
  ChannelLanguageDesc = 'channel_language_DESC',
  ChannelRewardAccountAsc = 'channel_rewardAccount_ASC',
  ChannelRewardAccountDesc = 'channel_rewardAccount_DESC',
  ChannelTitleAsc = 'channel_title_ASC',
  ChannelTitleDesc = 'channel_title_DESC',
  ChannelTotalVideosCreatedAsc = 'channel_totalVideosCreated_ASC',
  ChannelTotalVideosCreatedDesc = 'channel_totalVideosCreated_DESC',
  ChannelVideoViewsNumAsc = 'channel_videoViewsNum_ASC',
  ChannelVideoViewsNumDesc = 'channel_videoViewsNum_DESC',
  CommentsCountAsc = 'commentsCount_ASC',
  CommentsCountDesc = 'commentsCount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  EntryAppAuthKeyAsc = 'entryApp_authKey_ASC',
  EntryAppAuthKeyDesc = 'entryApp_authKey_DESC',
  EntryAppBigIconAsc = 'entryApp_bigIcon_ASC',
  EntryAppBigIconDesc = 'entryApp_bigIcon_DESC',
  EntryAppCategoryAsc = 'entryApp_category_ASC',
  EntryAppCategoryDesc = 'entryApp_category_DESC',
  EntryAppDescriptionAsc = 'entryApp_description_ASC',
  EntryAppDescriptionDesc = 'entryApp_description_DESC',
  EntryAppIdAsc = 'entryApp_id_ASC',
  EntryAppIdDesc = 'entryApp_id_DESC',
  EntryAppMediumIconAsc = 'entryApp_mediumIcon_ASC',
  EntryAppMediumIconDesc = 'entryApp_mediumIcon_DESC',
  EntryAppNameAsc = 'entryApp_name_ASC',
  EntryAppNameDesc = 'entryApp_name_DESC',
  EntryAppOneLinerAsc = 'entryApp_oneLiner_ASC',
  EntryAppOneLinerDesc = 'entryApp_oneLiner_DESC',
  EntryAppSmallIconAsc = 'entryApp_smallIcon_ASC',
  EntryAppSmallIconDesc = 'entryApp_smallIcon_DESC',
  EntryAppTermsOfServiceAsc = 'entryApp_termsOfService_ASC',
  EntryAppTermsOfServiceDesc = 'entryApp_termsOfService_DESC',
  EntryAppUseUriAsc = 'entryApp_useUri_ASC',
  EntryAppUseUriDesc = 'entryApp_useUri_DESC',
  EntryAppWebsiteUrlAsc = 'entryApp_websiteUrl_ASC',
  EntryAppWebsiteUrlDesc = 'entryApp_websiteUrl_DESC',
  HasMarketingAsc = 'hasMarketing_ASC',
  HasMarketingDesc = 'hasMarketing_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsCensoredAsc = 'isCensored_ASC',
  IsCensoredDesc = 'isCensored_DESC',
  IsCommentSectionEnabledAsc = 'isCommentSectionEnabled_ASC',
  IsCommentSectionEnabledDesc = 'isCommentSectionEnabled_DESC',
  IsExcludedAsc = 'isExcluded_ASC',
  IsExcludedDesc = 'isExcluded_DESC',
  IsExplicitAsc = 'isExplicit_ASC',
  IsExplicitDesc = 'isExplicit_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  IsReactionFeatureEnabledAsc = 'isReactionFeatureEnabled_ASC',
  IsReactionFeatureEnabledDesc = 'isReactionFeatureEnabled_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LicenseAttributionAsc = 'license_attribution_ASC',
  LicenseAttributionDesc = 'license_attribution_DESC',
  LicenseCodeAsc = 'license_code_ASC',
  LicenseCodeDesc = 'license_code_DESC',
  LicenseCustomTextAsc = 'license_customText_ASC',
  LicenseCustomTextDesc = 'license_customText_DESC',
  LicenseIdAsc = 'license_id_ASC',
  LicenseIdDesc = 'license_id_DESC',
  MediaMetadataCreatedInBlockAsc = 'mediaMetadata_createdInBlock_ASC',
  MediaMetadataCreatedInBlockDesc = 'mediaMetadata_createdInBlock_DESC',
  MediaMetadataIdAsc = 'mediaMetadata_id_ASC',
  MediaMetadataIdDesc = 'mediaMetadata_id_DESC',
  MediaMetadataPixelHeightAsc = 'mediaMetadata_pixelHeight_ASC',
  MediaMetadataPixelHeightDesc = 'mediaMetadata_pixelHeight_DESC',
  MediaMetadataPixelWidthAsc = 'mediaMetadata_pixelWidth_ASC',
  MediaMetadataPixelWidthDesc = 'mediaMetadata_pixelWidth_DESC',
  MediaMetadataSizeAsc = 'mediaMetadata_size_ASC',
  MediaMetadataSizeDesc = 'mediaMetadata_size_DESC',
  MediaCreatedAtAsc = 'media_createdAt_ASC',
  MediaCreatedAtDesc = 'media_createdAt_DESC',
  MediaIdAsc = 'media_id_ASC',
  MediaIdDesc = 'media_id_DESC',
  MediaIpfsHashAsc = 'media_ipfsHash_ASC',
  MediaIpfsHashDesc = 'media_ipfsHash_DESC',
  MediaIsAcceptedAsc = 'media_isAccepted_ASC',
  MediaIsAcceptedDesc = 'media_isAccepted_DESC',
  MediaSizeAsc = 'media_size_ASC',
  MediaSizeDesc = 'media_size_DESC',
  MediaStateBloatBondAsc = 'media_stateBloatBond_ASC',
  MediaStateBloatBondDesc = 'media_stateBloatBond_DESC',
  MediaUnsetAtAsc = 'media_unsetAt_ASC',
  MediaUnsetAtDesc = 'media_unsetAt_DESC',
  NftCreatedAtAsc = 'nft_createdAt_ASC',
  NftCreatedAtDesc = 'nft_createdAt_DESC',
  NftCreatorRoyaltyAsc = 'nft_creatorRoyalty_ASC',
  NftCreatorRoyaltyDesc = 'nft_creatorRoyalty_DESC',
  NftIdAsc = 'nft_id_ASC',
  NftIdDesc = 'nft_id_DESC',
  NftIsFeaturedAsc = 'nft_isFeatured_ASC',
  NftIsFeaturedDesc = 'nft_isFeatured_DESC',
  NftLastSaleDateAsc = 'nft_lastSaleDate_ASC',
  NftLastSaleDateDesc = 'nft_lastSaleDate_DESC',
  NftLastSalePriceAsc = 'nft_lastSalePrice_ASC',
  NftLastSalePriceDesc = 'nft_lastSalePrice_DESC',
  PinnedCommentCreatedAtAsc = 'pinnedComment_createdAt_ASC',
  PinnedCommentCreatedAtDesc = 'pinnedComment_createdAt_DESC',
  PinnedCommentIdAsc = 'pinnedComment_id_ASC',
  PinnedCommentIdDesc = 'pinnedComment_id_DESC',
  PinnedCommentIsEditedAsc = 'pinnedComment_isEdited_ASC',
  PinnedCommentIsEditedDesc = 'pinnedComment_isEdited_DESC',
  PinnedCommentIsExcludedAsc = 'pinnedComment_isExcluded_ASC',
  PinnedCommentIsExcludedDesc = 'pinnedComment_isExcluded_DESC',
  PinnedCommentReactionsAndRepliesCountAsc = 'pinnedComment_reactionsAndRepliesCount_ASC',
  PinnedCommentReactionsAndRepliesCountDesc = 'pinnedComment_reactionsAndRepliesCount_DESC',
  PinnedCommentReactionsCountAsc = 'pinnedComment_reactionsCount_ASC',
  PinnedCommentReactionsCountDesc = 'pinnedComment_reactionsCount_DESC',
  PinnedCommentRepliesCountAsc = 'pinnedComment_repliesCount_ASC',
  PinnedCommentRepliesCountDesc = 'pinnedComment_repliesCount_DESC',
  PinnedCommentStatusAsc = 'pinnedComment_status_ASC',
  PinnedCommentStatusDesc = 'pinnedComment_status_DESC',
  PinnedCommentTextAsc = 'pinnedComment_text_ASC',
  PinnedCommentTextDesc = 'pinnedComment_text_DESC',
  PublishedBeforeJoystreamAsc = 'publishedBeforeJoystream_ASC',
  PublishedBeforeJoystreamDesc = 'publishedBeforeJoystream_DESC',
  ReactionsCountAsc = 'reactionsCount_ASC',
  ReactionsCountDesc = 'reactionsCount_DESC',
  ThumbnailPhotoCreatedAtAsc = 'thumbnailPhoto_createdAt_ASC',
  ThumbnailPhotoCreatedAtDesc = 'thumbnailPhoto_createdAt_DESC',
  ThumbnailPhotoIdAsc = 'thumbnailPhoto_id_ASC',
  ThumbnailPhotoIdDesc = 'thumbnailPhoto_id_DESC',
  ThumbnailPhotoIpfsHashAsc = 'thumbnailPhoto_ipfsHash_ASC',
  ThumbnailPhotoIpfsHashDesc = 'thumbnailPhoto_ipfsHash_DESC',
  ThumbnailPhotoIsAcceptedAsc = 'thumbnailPhoto_isAccepted_ASC',
  ThumbnailPhotoIsAcceptedDesc = 'thumbnailPhoto_isAccepted_DESC',
  ThumbnailPhotoSizeAsc = 'thumbnailPhoto_size_ASC',
  ThumbnailPhotoSizeDesc = 'thumbnailPhoto_size_DESC',
  ThumbnailPhotoStateBloatBondAsc = 'thumbnailPhoto_stateBloatBond_ASC',
  ThumbnailPhotoStateBloatBondDesc = 'thumbnailPhoto_stateBloatBond_DESC',
  ThumbnailPhotoUnsetAtAsc = 'thumbnailPhoto_unsetAt_ASC',
  ThumbnailPhotoUnsetAtDesc = 'thumbnailPhoto_unsetAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VideoRelevanceAsc = 'videoRelevance_ASC',
  VideoRelevanceDesc = 'videoRelevance_DESC',
  VideoStateBloatBondAsc = 'videoStateBloatBond_ASC',
  VideoStateBloatBondDesc = 'videoStateBloatBond_DESC',
  ViewsNumAsc = 'viewsNum_ASC',
  ViewsNumDesc = 'viewsNum_DESC',
  YtVideoIdAsc = 'ytVideoId_ASC',
  YtVideoIdDesc = 'ytVideoId_DESC'
}

export type VideoReaction = {
  __typename?: 'VideoReaction';
  /** Timestamp of the block the reaction was created at */
  createdAt: Scalars['DateTime']['output'];
  /** {memberId}-{videoId} */
  id: Scalars['String']['output'];
  /** The member that reacted */
  member: Membership;
  /** The Reaction */
  reaction: VideoReactionOptions;
  /** The video that has been reacted to */
  video: Video;
};

export type VideoReactionEdge = {
  __typename?: 'VideoReactionEdge';
  cursor: Scalars['String']['output'];
  node: VideoReaction;
};

export enum VideoReactionOptions {
  Like = 'LIKE',
  Unlike = 'UNLIKE'
}

export enum VideoReactionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberControllerAccountAsc = 'member_controllerAccount_ASC',
  MemberControllerAccountDesc = 'member_controllerAccount_DESC',
  MemberCreatedAtAsc = 'member_createdAt_ASC',
  MemberCreatedAtDesc = 'member_createdAt_DESC',
  MemberHandleAsc = 'member_handle_ASC',
  MemberHandleDesc = 'member_handle_DESC',
  MemberIdAsc = 'member_id_ASC',
  MemberIdDesc = 'member_id_DESC',
  MemberTotalChannelsCreatedAsc = 'member_totalChannelsCreated_ASC',
  MemberTotalChannelsCreatedDesc = 'member_totalChannelsCreated_DESC',
  ReactionAsc = 'reaction_ASC',
  ReactionDesc = 'reaction_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type VideoReactionWhereInput = {
  AND?: InputMaybe<Array<VideoReactionWhereInput>>;
  OR?: InputMaybe<Array<VideoReactionWhereInput>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<MembershipWhereInput>;
  member_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reaction_eq?: InputMaybe<VideoReactionOptions>;
  reaction_in?: InputMaybe<Array<VideoReactionOptions>>;
  reaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reaction_not_eq?: InputMaybe<VideoReactionOptions>;
  reaction_not_in?: InputMaybe<Array<VideoReactionOptions>>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoReactionsConnection = {
  __typename?: 'VideoReactionsConnection';
  edges: Array<VideoReactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoReactionsCountByReactionType = {
  __typename?: 'VideoReactionsCountByReactionType';
  /** No of times the video has been reacted with given reaction */
  count: Scalars['Int']['output'];
  /** The reaction option */
  reaction: VideoReactionOptions;
};

export type VideoReportInfo = {
  __typename?: 'VideoReportInfo';
  created: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  rationale: Scalars['String']['output'];
  reporterIp: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
};

export type VideoSubtitle = {
  __typename?: 'VideoSubtitle';
  /** Storage object representing the subtitle file */
  asset?: Maybe<StorageDataObject>;
  /** {type}-{language} */
  id: Scalars['String']['output'];
  /** Subtitle's language */
  language?: Maybe<Scalars['String']['output']>;
  /** MIME type description of format used for this subtitle */
  mimeType: Scalars['String']['output'];
  /** Subtitle's type */
  type: Scalars['String']['output'];
  /** Subtitle's video */
  video: Video;
};

export type VideoSubtitleEdge = {
  __typename?: 'VideoSubtitleEdge';
  cursor: Scalars['String']['output'];
  node: VideoSubtitle;
};

export enum VideoSubtitleOrderByInput {
  AssetCreatedAtAsc = 'asset_createdAt_ASC',
  AssetCreatedAtDesc = 'asset_createdAt_DESC',
  AssetIdAsc = 'asset_id_ASC',
  AssetIdDesc = 'asset_id_DESC',
  AssetIpfsHashAsc = 'asset_ipfsHash_ASC',
  AssetIpfsHashDesc = 'asset_ipfsHash_DESC',
  AssetIsAcceptedAsc = 'asset_isAccepted_ASC',
  AssetIsAcceptedDesc = 'asset_isAccepted_DESC',
  AssetSizeAsc = 'asset_size_ASC',
  AssetSizeDesc = 'asset_size_DESC',
  AssetStateBloatBondAsc = 'asset_stateBloatBond_ASC',
  AssetStateBloatBondDesc = 'asset_stateBloatBond_DESC',
  AssetUnsetAtAsc = 'asset_unsetAt_ASC',
  AssetUnsetAtDesc = 'asset_unsetAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VideoCommentsCountAsc = 'video_commentsCount_ASC',
  VideoCommentsCountDesc = 'video_commentsCount_DESC',
  VideoCreatedAtAsc = 'video_createdAt_ASC',
  VideoCreatedAtDesc = 'video_createdAt_DESC',
  VideoCreatedInBlockAsc = 'video_createdInBlock_ASC',
  VideoCreatedInBlockDesc = 'video_createdInBlock_DESC',
  VideoDescriptionAsc = 'video_description_ASC',
  VideoDescriptionDesc = 'video_description_DESC',
  VideoDurationAsc = 'video_duration_ASC',
  VideoDurationDesc = 'video_duration_DESC',
  VideoHasMarketingAsc = 'video_hasMarketing_ASC',
  VideoHasMarketingDesc = 'video_hasMarketing_DESC',
  VideoIdAsc = 'video_id_ASC',
  VideoIdDesc = 'video_id_DESC',
  VideoIsCensoredAsc = 'video_isCensored_ASC',
  VideoIsCensoredDesc = 'video_isCensored_DESC',
  VideoIsCommentSectionEnabledAsc = 'video_isCommentSectionEnabled_ASC',
  VideoIsCommentSectionEnabledDesc = 'video_isCommentSectionEnabled_DESC',
  VideoIsExcludedAsc = 'video_isExcluded_ASC',
  VideoIsExcludedDesc = 'video_isExcluded_DESC',
  VideoIsExplicitAsc = 'video_isExplicit_ASC',
  VideoIsExplicitDesc = 'video_isExplicit_DESC',
  VideoIsPublicAsc = 'video_isPublic_ASC',
  VideoIsPublicDesc = 'video_isPublic_DESC',
  VideoIsReactionFeatureEnabledAsc = 'video_isReactionFeatureEnabled_ASC',
  VideoIsReactionFeatureEnabledDesc = 'video_isReactionFeatureEnabled_DESC',
  VideoLanguageAsc = 'video_language_ASC',
  VideoLanguageDesc = 'video_language_DESC',
  VideoPublishedBeforeJoystreamAsc = 'video_publishedBeforeJoystream_ASC',
  VideoPublishedBeforeJoystreamDesc = 'video_publishedBeforeJoystream_DESC',
  VideoReactionsCountAsc = 'video_reactionsCount_ASC',
  VideoReactionsCountDesc = 'video_reactionsCount_DESC',
  VideoTitleAsc = 'video_title_ASC',
  VideoTitleDesc = 'video_title_DESC',
  VideoVideoRelevanceAsc = 'video_videoRelevance_ASC',
  VideoVideoRelevanceDesc = 'video_videoRelevance_DESC',
  VideoVideoStateBloatBondAsc = 'video_videoStateBloatBond_ASC',
  VideoVideoStateBloatBondDesc = 'video_videoStateBloatBond_DESC',
  VideoViewsNumAsc = 'video_viewsNum_ASC',
  VideoViewsNumDesc = 'video_viewsNum_DESC',
  VideoYtVideoIdAsc = 'video_ytVideoId_ASC',
  VideoYtVideoIdDesc = 'video_ytVideoId_DESC'
}

export type VideoSubtitleWhereInput = {
  AND?: InputMaybe<Array<VideoSubtitleWhereInput>>;
  OR?: InputMaybe<Array<VideoSubtitleWhereInput>>;
  asset?: InputMaybe<StorageDataObjectWhereInput>;
  asset_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  language_endsWith?: InputMaybe<Scalars['String']['input']>;
  language_eq?: InputMaybe<Scalars['String']['input']>;
  language_gt?: InputMaybe<Scalars['String']['input']>;
  language_gte?: InputMaybe<Scalars['String']['input']>;
  language_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  language_lt?: InputMaybe<Scalars['String']['input']>;
  language_lte?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  language_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  language_not_eq?: InputMaybe<Scalars['String']['input']>;
  language_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  language_startsWith?: InputMaybe<Scalars['String']['input']>;
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  mimeType_endsWith?: InputMaybe<Scalars['String']['input']>;
  mimeType_eq?: InputMaybe<Scalars['String']['input']>;
  mimeType_gt?: InputMaybe<Scalars['String']['input']>;
  mimeType_gte?: InputMaybe<Scalars['String']['input']>;
  mimeType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeType_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  mimeType_lt?: InputMaybe<Scalars['String']['input']>;
  mimeType_lte?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_eq?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeType_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  mimeType_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  type_endsWith?: InputMaybe<Scalars['String']['input']>;
  type_eq?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  type_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  type_not_eq?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_startsWith?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<VideoWhereInput>;
  video_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoSubtitlesConnection = {
  __typename?: 'VideoSubtitlesConnection';
  edges: Array<VideoSubtitleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoViewEvent = {
  __typename?: 'VideoViewEvent';
  /** Unique identifier of the video view event */
  id: Scalars['String']['output'];
  /** IP address of the viewer */
  ip: Scalars['String']['output'];
  /** Video view event timestamp */
  timestamp: Scalars['DateTime']['output'];
  /** ID of the video that was viewed (the video may no longer exist) */
  videoId: Scalars['String']['output'];
};

export type VideoViewEventEdge = {
  __typename?: 'VideoViewEventEdge';
  cursor: Scalars['String']['output'];
  node: VideoViewEvent;
};

export enum VideoViewEventOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IpAsc = 'ip_ASC',
  IpDesc = 'ip_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC'
}

export type VideoViewEventWhereInput = {
  AND?: InputMaybe<Array<VideoViewEventWhereInput>>;
  OR?: InputMaybe<Array<VideoViewEventWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_contains?: InputMaybe<Scalars['String']['input']>;
  ip_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_eq?: InputMaybe<Scalars['String']['input']>;
  ip_gt?: InputMaybe<Scalars['String']['input']>;
  ip_gte?: InputMaybe<Scalars['String']['input']>;
  ip_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ip_lt?: InputMaybe<Scalars['String']['input']>;
  ip_lte?: InputMaybe<Scalars['String']['input']>;
  ip_not_contains?: InputMaybe<Scalars['String']['input']>;
  ip_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ip_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  ip_not_eq?: InputMaybe<Scalars['String']['input']>;
  ip_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ip_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  ip_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  videoId_contains?: InputMaybe<Scalars['String']['input']>;
  videoId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  videoId_endsWith?: InputMaybe<Scalars['String']['input']>;
  videoId_eq?: InputMaybe<Scalars['String']['input']>;
  videoId_gt?: InputMaybe<Scalars['String']['input']>;
  videoId_gte?: InputMaybe<Scalars['String']['input']>;
  videoId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  videoId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  videoId_lt?: InputMaybe<Scalars['String']['input']>;
  videoId_lte?: InputMaybe<Scalars['String']['input']>;
  videoId_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  videoId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  videoId_not_eq?: InputMaybe<Scalars['String']['input']>;
  videoId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  videoId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  videoId_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type VideoViewEventsConnection = {
  __typename?: 'VideoViewEventsConnection';
  edges: Array<VideoViewEventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoViewPerIpTimeLimit = {
  __typename?: 'VideoViewPerIpTimeLimit';
  limitInSeconds: Scalars['Int']['output'];
};

export type VideoWeights = {
  __typename?: 'VideoWeights';
  isApplied: Scalars['Boolean']['output'];
};

export type VideoWhereInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>;
  OR?: InputMaybe<Array<VideoWhereInput>>;
  category?: InputMaybe<VideoCategoryWhereInput>;
  category_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  channel?: InputMaybe<ChannelWhereInput>;
  channel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commentsCount_eq?: InputMaybe<Scalars['Int']['input']>;
  commentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  commentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  commentsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  commentsCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  commentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  commentsCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  commentsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  comments_every?: InputMaybe<CommentWhereInput>;
  comments_none?: InputMaybe<CommentWhereInput>;
  comments_some?: InputMaybe<CommentWhereInput>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdInBlock_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdInBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdInBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_eq?: InputMaybe<Scalars['Int']['input']>;
  createdInBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_eq?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  description_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  description_not_eq?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  description_startsWith?: InputMaybe<Scalars['String']['input']>;
  duration_eq?: InputMaybe<Scalars['Int']['input']>;
  duration_gt?: InputMaybe<Scalars['Int']['input']>;
  duration_gte?: InputMaybe<Scalars['Int']['input']>;
  duration_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  duration_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  duration_lt?: InputMaybe<Scalars['Int']['input']>;
  duration_lte?: InputMaybe<Scalars['Int']['input']>;
  duration_not_eq?: InputMaybe<Scalars['Int']['input']>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  entryApp?: InputMaybe<AppWhereInput>;
  entryApp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  hasMarketing_eq?: InputMaybe<Scalars['Boolean']['input']>;
  hasMarketing_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  hasMarketing_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isCensored_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCensored_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isCensored_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCommentSectionEnabled_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isCommentSectionEnabled_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isCommentSectionEnabled_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isExcluded_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExplicit_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isExplicit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isExplicit_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isReactionFeatureEnabled_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isReactionFeatureEnabled_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isReactionFeatureEnabled_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  language_endsWith?: InputMaybe<Scalars['String']['input']>;
  language_eq?: InputMaybe<Scalars['String']['input']>;
  language_gt?: InputMaybe<Scalars['String']['input']>;
  language_gte?: InputMaybe<Scalars['String']['input']>;
  language_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  language_lt?: InputMaybe<Scalars['String']['input']>;
  language_lte?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  language_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  language_not_eq?: InputMaybe<Scalars['String']['input']>;
  language_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  language_startsWith?: InputMaybe<Scalars['String']['input']>;
  license?: InputMaybe<LicenseWhereInput>;
  license_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<StorageDataObjectWhereInput>;
  mediaMetadata?: InputMaybe<VideoMediaMetadataWhereInput>;
  mediaMetadata_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  media_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  nft?: InputMaybe<OwnedNftWhereInput>;
  nft_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pinnedComment?: InputMaybe<CommentWhereInput>;
  pinnedComment_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  publishedBeforeJoystream_eq?: InputMaybe<Scalars['DateTime']['input']>;
  publishedBeforeJoystream_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedBeforeJoystream_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedBeforeJoystream_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  publishedBeforeJoystream_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  publishedBeforeJoystream_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedBeforeJoystream_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedBeforeJoystream_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  publishedBeforeJoystream_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  reactionsCountByReactionId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionsCount_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactionsCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reactionsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  reactionsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactions_every?: InputMaybe<VideoReactionWhereInput>;
  reactions_none?: InputMaybe<VideoReactionWhereInput>;
  reactions_some?: InputMaybe<VideoReactionWhereInput>;
  subtitles_every?: InputMaybe<VideoSubtitleWhereInput>;
  subtitles_none?: InputMaybe<VideoSubtitleWhereInput>;
  subtitles_some?: InputMaybe<VideoSubtitleWhereInput>;
  thumbnailPhoto?: InputMaybe<StorageDataObjectWhereInput>;
  thumbnailPhoto_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  title_endsWith?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  title_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  title_startsWith?: InputMaybe<Scalars['String']['input']>;
  videoRelevance_eq?: InputMaybe<Scalars['Float']['input']>;
  videoRelevance_gt?: InputMaybe<Scalars['Float']['input']>;
  videoRelevance_gte?: InputMaybe<Scalars['Float']['input']>;
  videoRelevance_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  videoRelevance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  videoRelevance_lt?: InputMaybe<Scalars['Float']['input']>;
  videoRelevance_lte?: InputMaybe<Scalars['Float']['input']>;
  videoRelevance_not_eq?: InputMaybe<Scalars['Float']['input']>;
  videoRelevance_not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  videoStateBloatBond_eq?: InputMaybe<Scalars['BigInt']['input']>;
  videoStateBloatBond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  videoStateBloatBond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  videoStateBloatBond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  videoStateBloatBond_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  videoStateBloatBond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  videoStateBloatBond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  videoStateBloatBond_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  videoStateBloatBond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  viewsNum_eq?: InputMaybe<Scalars['Int']['input']>;
  viewsNum_gt?: InputMaybe<Scalars['Int']['input']>;
  viewsNum_gte?: InputMaybe<Scalars['Int']['input']>;
  viewsNum_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  viewsNum_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  viewsNum_lt?: InputMaybe<Scalars['Int']['input']>;
  viewsNum_lte?: InputMaybe<Scalars['Int']['input']>;
  viewsNum_not_eq?: InputMaybe<Scalars['Int']['input']>;
  viewsNum_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  ytVideoId_contains?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_endsWith?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_eq?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_gt?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_gte?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ytVideoId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ytVideoId_lt?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_lte?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_not_contains?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_not_eq?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ytVideoId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  ytVideoId_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type VideosConnection = {
  __typename?: 'VideosConnection';
  edges: Array<VideoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideosSearchResult = {
  __typename?: 'VideosSearchResult';
  relevance: Scalars['Int']['output'];
  video: Video;
};

export type WhereIdInput = {
  id: Scalars['String']['input'];
};

export type GetDistributorOperatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDistributorOperatorsQuery = { __typename?: 'Query', distributionBucketOperators: Array<{ __typename?: 'DistributionBucketOperator', id: string, workerId: number, distributionBucket: { __typename?: 'DistributionBucket', id: string, distributing: boolean, acceptingNewBags: boolean }, metadata?: { __typename?: 'DistributionBucketOperatorMetadata', nodeEndpoint?: string | null } | null }> };


export const GetDistributorOperatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDistributorOperators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distributionBucketOperators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status_eq"},"value":{"kind":"EnumValue","value":"ACTIVE"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workerId"}},{"kind":"Field","name":{"kind":"Name","value":"distributionBucket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"distributing"}},{"kind":"Field","name":{"kind":"Name","value":"acceptingNewBags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeEndpoint"}}]}}]}}]}}]} as unknown as DocumentNode<GetDistributorOperatorsQuery, GetDistributorOperatorsQueryVariables>;