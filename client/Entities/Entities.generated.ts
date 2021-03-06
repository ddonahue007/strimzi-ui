import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Topic = {
  /** ID */
  name?: Maybe<Scalars['String']>;
  isInternal?: Maybe<Scalars['Boolean']>;
  partitions: Array<Partition>;
  config?: Maybe<Array<Maybe<ConfigEntry>>>;
};

/** embedded in Topic */
export type Partition = {
  /** ID */
  partition?: Maybe<Scalars['Int']>;
  replicas: Array<Node>;
  /** InSyncReplicas */
  isr?: Maybe<Array<Maybe<Node>>>;
  leader?: Maybe<Node>;
};

export type Node = {
  id: Scalars['Int'];
};

export type ConfigEntry = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type TopicList = {
  items: Array<Maybe<Topic>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type NewTopicConfigEntry = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type NewTopic = {
  name: Scalars['String'];
  numPartitions: Scalars['Int'];
  replicationFactor: Scalars['Int'];
  config?: Maybe<Array<Maybe<NewTopicConfigEntry>>>;
};
