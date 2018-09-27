export const typeDefs = /* GraphQL */ `type AggregateCardData {
  count: Int!
}

type AggregateCommentData {
  count: Int!
}

type AggregateLikeData {
  count: Int!
}

type AggregateNotificaitonDescription {
  count: Int!
}

type AggregateNotificationData {
  count: Int!
}

type AggregatePictureData {
  count: Int!
}

type AggregateStoryData {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CardData {
  id: ID!
  Name: String!
  ThumbURL: String!
  TotalLike: Int
  TotalComments: Int
  FeedDesc: String!
  AllComments(where: CommentDataWhereInput, orderBy: CommentDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CommentData!]
  AllLikes(where: LikeDataWhereInput, orderBy: LikeDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LikeData!]
  TimeData: DateTime!
  Location: String!
  PictureForFeed: String!
}

type CardDataConnection {
  pageInfo: PageInfo!
  edges: [CardDataEdge]!
  aggregate: AggregateCardData!
}

input CardDataCreateInput {
  Name: String!
  ThumbURL: String!
  TotalLike: Int
  TotalComments: Int
  FeedDesc: String!
  AllComments: CommentDataCreateManyInput
  AllLikes: LikeDataCreateManyInput
  TimeData: DateTime!
  Location: String!
  PictureForFeed: String!
}

type CardDataEdge {
  node: CardData!
  cursor: String!
}

enum CardDataOrderByInput {
  id_ASC
  id_DESC
  Name_ASC
  Name_DESC
  ThumbURL_ASC
  ThumbURL_DESC
  TotalLike_ASC
  TotalLike_DESC
  TotalComments_ASC
  TotalComments_DESC
  FeedDesc_ASC
  FeedDesc_DESC
  TimeData_ASC
  TimeData_DESC
  Location_ASC
  Location_DESC
  PictureForFeed_ASC
  PictureForFeed_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CardDataPreviousValues {
  id: ID!
  Name: String!
  ThumbURL: String!
  TotalLike: Int
  TotalComments: Int
  FeedDesc: String!
  TimeData: DateTime!
  Location: String!
  PictureForFeed: String!
}

type CardDataSubscriptionPayload {
  mutation: MutationType!
  node: CardData
  updatedFields: [String!]
  previousValues: CardDataPreviousValues
}

input CardDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CardDataWhereInput
  AND: [CardDataSubscriptionWhereInput!]
  OR: [CardDataSubscriptionWhereInput!]
  NOT: [CardDataSubscriptionWhereInput!]
}

input CardDataUpdateInput {
  Name: String
  ThumbURL: String
  TotalLike: Int
  TotalComments: Int
  FeedDesc: String
  AllComments: CommentDataUpdateManyInput
  AllLikes: LikeDataUpdateManyInput
  TimeData: DateTime
  Location: String
  PictureForFeed: String
}

input CardDataWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  Name: String
  Name_not: String
  Name_in: [String!]
  Name_not_in: [String!]
  Name_lt: String
  Name_lte: String
  Name_gt: String
  Name_gte: String
  Name_contains: String
  Name_not_contains: String
  Name_starts_with: String
  Name_not_starts_with: String
  Name_ends_with: String
  Name_not_ends_with: String
  ThumbURL: String
  ThumbURL_not: String
  ThumbURL_in: [String!]
  ThumbURL_not_in: [String!]
  ThumbURL_lt: String
  ThumbURL_lte: String
  ThumbURL_gt: String
  ThumbURL_gte: String
  ThumbURL_contains: String
  ThumbURL_not_contains: String
  ThumbURL_starts_with: String
  ThumbURL_not_starts_with: String
  ThumbURL_ends_with: String
  ThumbURL_not_ends_with: String
  TotalLike: Int
  TotalLike_not: Int
  TotalLike_in: [Int!]
  TotalLike_not_in: [Int!]
  TotalLike_lt: Int
  TotalLike_lte: Int
  TotalLike_gt: Int
  TotalLike_gte: Int
  TotalComments: Int
  TotalComments_not: Int
  TotalComments_in: [Int!]
  TotalComments_not_in: [Int!]
  TotalComments_lt: Int
  TotalComments_lte: Int
  TotalComments_gt: Int
  TotalComments_gte: Int
  FeedDesc: String
  FeedDesc_not: String
  FeedDesc_in: [String!]
  FeedDesc_not_in: [String!]
  FeedDesc_lt: String
  FeedDesc_lte: String
  FeedDesc_gt: String
  FeedDesc_gte: String
  FeedDesc_contains: String
  FeedDesc_not_contains: String
  FeedDesc_starts_with: String
  FeedDesc_not_starts_with: String
  FeedDesc_ends_with: String
  FeedDesc_not_ends_with: String
  AllComments_every: CommentDataWhereInput
  AllComments_some: CommentDataWhereInput
  AllComments_none: CommentDataWhereInput
  AllLikes_every: LikeDataWhereInput
  AllLikes_some: LikeDataWhereInput
  AllLikes_none: LikeDataWhereInput
  TimeData: DateTime
  TimeData_not: DateTime
  TimeData_in: [DateTime!]
  TimeData_not_in: [DateTime!]
  TimeData_lt: DateTime
  TimeData_lte: DateTime
  TimeData_gt: DateTime
  TimeData_gte: DateTime
  Location: String
  Location_not: String
  Location_in: [String!]
  Location_not_in: [String!]
  Location_lt: String
  Location_lte: String
  Location_gt: String
  Location_gte: String
  Location_contains: String
  Location_not_contains: String
  Location_starts_with: String
  Location_not_starts_with: String
  Location_ends_with: String
  Location_not_ends_with: String
  PictureForFeed: String
  PictureForFeed_not: String
  PictureForFeed_in: [String!]
  PictureForFeed_not_in: [String!]
  PictureForFeed_lt: String
  PictureForFeed_lte: String
  PictureForFeed_gt: String
  PictureForFeed_gte: String
  PictureForFeed_contains: String
  PictureForFeed_not_contains: String
  PictureForFeed_starts_with: String
  PictureForFeed_not_starts_with: String
  PictureForFeed_ends_with: String
  PictureForFeed_not_ends_with: String
  AND: [CardDataWhereInput!]
  OR: [CardDataWhereInput!]
  NOT: [CardDataWhereInput!]
}

input CardDataWhereUniqueInput {
  id: ID
}

type CommentData {
  Comment: String!
  CommentTime: DateTime!
  ProfileWhichCommented: String!
  Replies: String!
}

type CommentDataConnection {
  pageInfo: PageInfo!
  edges: [CommentDataEdge]!
  aggregate: AggregateCommentData!
}

input CommentDataCreateInput {
  Comment: String!
  CommentTime: DateTime!
  ProfileWhichCommented: String!
  Replies: String!
}

input CommentDataCreateManyInput {
  create: [CommentDataCreateInput!]
}

type CommentDataEdge {
  node: CommentData!
  cursor: String!
}

enum CommentDataOrderByInput {
  Comment_ASC
  Comment_DESC
  CommentTime_ASC
  CommentTime_DESC
  ProfileWhichCommented_ASC
  ProfileWhichCommented_DESC
  Replies_ASC
  Replies_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentDataPreviousValues {
  Comment: String!
  CommentTime: DateTime!
  ProfileWhichCommented: String!
  Replies: String!
}

type CommentDataSubscriptionPayload {
  mutation: MutationType!
  node: CommentData
  updatedFields: [String!]
  previousValues: CommentDataPreviousValues
}

input CommentDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentDataWhereInput
  AND: [CommentDataSubscriptionWhereInput!]
  OR: [CommentDataSubscriptionWhereInput!]
  NOT: [CommentDataSubscriptionWhereInput!]
}

input CommentDataUpdateInput {
  Comment: String
  CommentTime: DateTime
  ProfileWhichCommented: String
  Replies: String
}

input CommentDataUpdateManyInput {
  create: [CommentDataCreateInput!]
}

input CommentDataWhereInput {
  Comment: String
  Comment_not: String
  Comment_in: [String!]
  Comment_not_in: [String!]
  Comment_lt: String
  Comment_lte: String
  Comment_gt: String
  Comment_gte: String
  Comment_contains: String
  Comment_not_contains: String
  Comment_starts_with: String
  Comment_not_starts_with: String
  Comment_ends_with: String
  Comment_not_ends_with: String
  CommentTime: DateTime
  CommentTime_not: DateTime
  CommentTime_in: [DateTime!]
  CommentTime_not_in: [DateTime!]
  CommentTime_lt: DateTime
  CommentTime_lte: DateTime
  CommentTime_gt: DateTime
  CommentTime_gte: DateTime
  ProfileWhichCommented: String
  ProfileWhichCommented_not: String
  ProfileWhichCommented_in: [String!]
  ProfileWhichCommented_not_in: [String!]
  ProfileWhichCommented_lt: String
  ProfileWhichCommented_lte: String
  ProfileWhichCommented_gt: String
  ProfileWhichCommented_gte: String
  ProfileWhichCommented_contains: String
  ProfileWhichCommented_not_contains: String
  ProfileWhichCommented_starts_with: String
  ProfileWhichCommented_not_starts_with: String
  ProfileWhichCommented_ends_with: String
  ProfileWhichCommented_not_ends_with: String
  Replies: String
  Replies_not: String
  Replies_in: [String!]
  Replies_not_in: [String!]
  Replies_lt: String
  Replies_lte: String
  Replies_gt: String
  Replies_gte: String
  Replies_contains: String
  Replies_not_contains: String
  Replies_starts_with: String
  Replies_not_starts_with: String
  Replies_ends_with: String
  Replies_not_ends_with: String
  AND: [CommentDataWhereInput!]
  OR: [CommentDataWhereInput!]
  NOT: [CommentDataWhereInput!]
}

scalar DateTime

type LikeData {
  ProfileName: String!
  ProfilePic: String!
}

type LikeDataConnection {
  pageInfo: PageInfo!
  edges: [LikeDataEdge]!
  aggregate: AggregateLikeData!
}

input LikeDataCreateInput {
  ProfileName: String!
  ProfilePic: String!
}

input LikeDataCreateManyInput {
  create: [LikeDataCreateInput!]
}

type LikeDataEdge {
  node: LikeData!
  cursor: String!
}

enum LikeDataOrderByInput {
  ProfileName_ASC
  ProfileName_DESC
  ProfilePic_ASC
  ProfilePic_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LikeDataPreviousValues {
  ProfileName: String!
  ProfilePic: String!
}

type LikeDataSubscriptionPayload {
  mutation: MutationType!
  node: LikeData
  updatedFields: [String!]
  previousValues: LikeDataPreviousValues
}

input LikeDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LikeDataWhereInput
  AND: [LikeDataSubscriptionWhereInput!]
  OR: [LikeDataSubscriptionWhereInput!]
  NOT: [LikeDataSubscriptionWhereInput!]
}

input LikeDataUpdateInput {
  ProfileName: String
  ProfilePic: String
}

input LikeDataUpdateManyInput {
  create: [LikeDataCreateInput!]
}

input LikeDataWhereInput {
  ProfileName: String
  ProfileName_not: String
  ProfileName_in: [String!]
  ProfileName_not_in: [String!]
  ProfileName_lt: String
  ProfileName_lte: String
  ProfileName_gt: String
  ProfileName_gte: String
  ProfileName_contains: String
  ProfileName_not_contains: String
  ProfileName_starts_with: String
  ProfileName_not_starts_with: String
  ProfileName_ends_with: String
  ProfileName_not_ends_with: String
  ProfilePic: String
  ProfilePic_not: String
  ProfilePic_in: [String!]
  ProfilePic_not_in: [String!]
  ProfilePic_lt: String
  ProfilePic_lte: String
  ProfilePic_gt: String
  ProfilePic_gte: String
  ProfilePic_contains: String
  ProfilePic_not_contains: String
  ProfilePic_starts_with: String
  ProfilePic_not_starts_with: String
  ProfilePic_ends_with: String
  ProfilePic_not_ends_with: String
  AND: [LikeDataWhereInput!]
  OR: [LikeDataWhereInput!]
  NOT: [LikeDataWhereInput!]
}

scalar Long

type Mutation {
  createCardData(data: CardDataCreateInput!): CardData!
  updateCardData(data: CardDataUpdateInput!, where: CardDataWhereUniqueInput!): CardData
  updateManyCardDatas(data: CardDataUpdateInput!, where: CardDataWhereInput): BatchPayload!
  upsertCardData(where: CardDataWhereUniqueInput!, create: CardDataCreateInput!, update: CardDataUpdateInput!): CardData!
  deleteCardData(where: CardDataWhereUniqueInput!): CardData
  deleteManyCardDatas(where: CardDataWhereInput): BatchPayload!
  createCommentData(data: CommentDataCreateInput!): CommentData!
  updateManyCommentDatas(data: CommentDataUpdateInput!, where: CommentDataWhereInput): BatchPayload!
  deleteManyCommentDatas(where: CommentDataWhereInput): BatchPayload!
  createLikeData(data: LikeDataCreateInput!): LikeData!
  updateManyLikeDatas(data: LikeDataUpdateInput!, where: LikeDataWhereInput): BatchPayload!
  deleteManyLikeDatas(where: LikeDataWhereInput): BatchPayload!
  createNotificaitonDescription(data: NotificaitonDescriptionCreateInput!): NotificaitonDescription!
  updateManyNotificaitonDescriptions(data: NotificaitonDescriptionUpdateInput!, where: NotificaitonDescriptionWhereInput): BatchPayload!
  deleteManyNotificaitonDescriptions(where: NotificaitonDescriptionWhereInput): BatchPayload!
  createNotificationData(data: NotificationDataCreateInput!): NotificationData!
  updateNotificationData(data: NotificationDataUpdateInput!, where: NotificationDataWhereUniqueInput!): NotificationData
  updateManyNotificationDatas(data: NotificationDataUpdateInput!, where: NotificationDataWhereInput): BatchPayload!
  upsertNotificationData(where: NotificationDataWhereUniqueInput!, create: NotificationDataCreateInput!, update: NotificationDataUpdateInput!): NotificationData!
  deleteNotificationData(where: NotificationDataWhereUniqueInput!): NotificationData
  deleteManyNotificationDatas(where: NotificationDataWhereInput): BatchPayload!
  createPictureData(data: PictureDataCreateInput!): PictureData!
  updatePictureData(data: PictureDataUpdateInput!, where: PictureDataWhereUniqueInput!): PictureData
  updateManyPictureDatas(data: PictureDataUpdateInput!, where: PictureDataWhereInput): BatchPayload!
  upsertPictureData(where: PictureDataWhereUniqueInput!, create: PictureDataCreateInput!, update: PictureDataUpdateInput!): PictureData!
  deletePictureData(where: PictureDataWhereUniqueInput!): PictureData
  deleteManyPictureDatas(where: PictureDataWhereInput): BatchPayload!
  createStoryData(data: StoryDataCreateInput!): StoryData!
  updateStoryData(data: StoryDataUpdateInput!, where: StoryDataWhereUniqueInput!): StoryData
  updateManyStoryDatas(data: StoryDataUpdateInput!, where: StoryDataWhereInput): BatchPayload!
  upsertStoryData(where: StoryDataWhereUniqueInput!, create: StoryDataCreateInput!, update: StoryDataUpdateInput!): StoryData!
  deleteStoryData(where: StoryDataWhereUniqueInput!): StoryData
  deleteManyStoryDatas(where: StoryDataWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type NotificaitonDescription {
  ProfileName: String!
  ProfilePicture: String!
}

type NotificaitonDescriptionConnection {
  pageInfo: PageInfo!
  edges: [NotificaitonDescriptionEdge]!
  aggregate: AggregateNotificaitonDescription!
}

input NotificaitonDescriptionCreateInput {
  ProfileName: String!
  ProfilePicture: String!
}

input NotificaitonDescriptionCreateOneInput {
  create: NotificaitonDescriptionCreateInput
}

type NotificaitonDescriptionEdge {
  node: NotificaitonDescription!
  cursor: String!
}

enum NotificaitonDescriptionOrderByInput {
  ProfileName_ASC
  ProfileName_DESC
  ProfilePicture_ASC
  ProfilePicture_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificaitonDescriptionPreviousValues {
  ProfileName: String!
  ProfilePicture: String!
}

type NotificaitonDescriptionSubscriptionPayload {
  mutation: MutationType!
  node: NotificaitonDescription
  updatedFields: [String!]
  previousValues: NotificaitonDescriptionPreviousValues
}

input NotificaitonDescriptionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificaitonDescriptionWhereInput
  AND: [NotificaitonDescriptionSubscriptionWhereInput!]
  OR: [NotificaitonDescriptionSubscriptionWhereInput!]
  NOT: [NotificaitonDescriptionSubscriptionWhereInput!]
}

input NotificaitonDescriptionUpdateDataInput {
  ProfileName: String
  ProfilePicture: String
}

input NotificaitonDescriptionUpdateInput {
  ProfileName: String
  ProfilePicture: String
}

input NotificaitonDescriptionUpdateOneInput {
  create: NotificaitonDescriptionCreateInput
  update: NotificaitonDescriptionUpdateDataInput
  upsert: NotificaitonDescriptionUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input NotificaitonDescriptionUpsertNestedInput {
  update: NotificaitonDescriptionUpdateDataInput!
  create: NotificaitonDescriptionCreateInput!
}

input NotificaitonDescriptionWhereInput {
  ProfileName: String
  ProfileName_not: String
  ProfileName_in: [String!]
  ProfileName_not_in: [String!]
  ProfileName_lt: String
  ProfileName_lte: String
  ProfileName_gt: String
  ProfileName_gte: String
  ProfileName_contains: String
  ProfileName_not_contains: String
  ProfileName_starts_with: String
  ProfileName_not_starts_with: String
  ProfileName_ends_with: String
  ProfileName_not_ends_with: String
  ProfilePicture: String
  ProfilePicture_not: String
  ProfilePicture_in: [String!]
  ProfilePicture_not_in: [String!]
  ProfilePicture_lt: String
  ProfilePicture_lte: String
  ProfilePicture_gt: String
  ProfilePicture_gte: String
  ProfilePicture_contains: String
  ProfilePicture_not_contains: String
  ProfilePicture_starts_with: String
  ProfilePicture_not_starts_with: String
  ProfilePicture_ends_with: String
  ProfilePicture_not_ends_with: String
  AND: [NotificaitonDescriptionWhereInput!]
  OR: [NotificaitonDescriptionWhereInput!]
  NOT: [NotificaitonDescriptionWhereInput!]
}

type NotificationData {
  id: ID!
  ArrayOfNotificaitons: NotificaitonDescription
  NotificaitonCategory: String!
  Picture: String!
  Time: DateTime!
  Date: DateTime!
}

type NotificationDataConnection {
  pageInfo: PageInfo!
  edges: [NotificationDataEdge]!
  aggregate: AggregateNotificationData!
}

input NotificationDataCreateInput {
  ArrayOfNotificaitons: NotificaitonDescriptionCreateOneInput
  NotificaitonCategory: String!
  Picture: String!
  Time: DateTime!
  Date: DateTime!
}

type NotificationDataEdge {
  node: NotificationData!
  cursor: String!
}

enum NotificationDataOrderByInput {
  id_ASC
  id_DESC
  NotificaitonCategory_ASC
  NotificaitonCategory_DESC
  Picture_ASC
  Picture_DESC
  Time_ASC
  Time_DESC
  Date_ASC
  Date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationDataPreviousValues {
  id: ID!
  NotificaitonCategory: String!
  Picture: String!
  Time: DateTime!
  Date: DateTime!
}

type NotificationDataSubscriptionPayload {
  mutation: MutationType!
  node: NotificationData
  updatedFields: [String!]
  previousValues: NotificationDataPreviousValues
}

input NotificationDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificationDataWhereInput
  AND: [NotificationDataSubscriptionWhereInput!]
  OR: [NotificationDataSubscriptionWhereInput!]
  NOT: [NotificationDataSubscriptionWhereInput!]
}

input NotificationDataUpdateInput {
  ArrayOfNotificaitons: NotificaitonDescriptionUpdateOneInput
  NotificaitonCategory: String
  Picture: String
  Time: DateTime
  Date: DateTime
}

input NotificationDataWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ArrayOfNotificaitons: NotificaitonDescriptionWhereInput
  NotificaitonCategory: String
  NotificaitonCategory_not: String
  NotificaitonCategory_in: [String!]
  NotificaitonCategory_not_in: [String!]
  NotificaitonCategory_lt: String
  NotificaitonCategory_lte: String
  NotificaitonCategory_gt: String
  NotificaitonCategory_gte: String
  NotificaitonCategory_contains: String
  NotificaitonCategory_not_contains: String
  NotificaitonCategory_starts_with: String
  NotificaitonCategory_not_starts_with: String
  NotificaitonCategory_ends_with: String
  NotificaitonCategory_not_ends_with: String
  Picture: String
  Picture_not: String
  Picture_in: [String!]
  Picture_not_in: [String!]
  Picture_lt: String
  Picture_lte: String
  Picture_gt: String
  Picture_gte: String
  Picture_contains: String
  Picture_not_contains: String
  Picture_starts_with: String
  Picture_not_starts_with: String
  Picture_ends_with: String
  Picture_not_ends_with: String
  Time: DateTime
  Time_not: DateTime
  Time_in: [DateTime!]
  Time_not_in: [DateTime!]
  Time_lt: DateTime
  Time_lte: DateTime
  Time_gt: DateTime
  Time_gte: DateTime
  Date: DateTime
  Date_not: DateTime
  Date_in: [DateTime!]
  Date_not_in: [DateTime!]
  Date_lt: DateTime
  Date_lte: DateTime
  Date_gt: DateTime
  Date_gte: DateTime
  AND: [NotificationDataWhereInput!]
  OR: [NotificationDataWhereInput!]
  NOT: [NotificationDataWhereInput!]
}

input NotificationDataWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PictureData {
  picture: String!
  id: ID!
}

type PictureDataConnection {
  pageInfo: PageInfo!
  edges: [PictureDataEdge]!
  aggregate: AggregatePictureData!
}

input PictureDataCreateInput {
  picture: String!
}

input PictureDataCreateOneInput {
  create: PictureDataCreateInput
  connect: PictureDataWhereUniqueInput
}

type PictureDataEdge {
  node: PictureData!
  cursor: String!
}

enum PictureDataOrderByInput {
  picture_ASC
  picture_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PictureDataPreviousValues {
  picture: String!
  id: ID!
}

type PictureDataSubscriptionPayload {
  mutation: MutationType!
  node: PictureData
  updatedFields: [String!]
  previousValues: PictureDataPreviousValues
}

input PictureDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PictureDataWhereInput
  AND: [PictureDataSubscriptionWhereInput!]
  OR: [PictureDataSubscriptionWhereInput!]
  NOT: [PictureDataSubscriptionWhereInput!]
}

input PictureDataUpdateDataInput {
  picture: String
}

input PictureDataUpdateInput {
  picture: String
}

input PictureDataUpdateOneInput {
  create: PictureDataCreateInput
  update: PictureDataUpdateDataInput
  upsert: PictureDataUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PictureDataWhereUniqueInput
}

input PictureDataUpsertNestedInput {
  update: PictureDataUpdateDataInput!
  create: PictureDataCreateInput!
}

input PictureDataWhereInput {
  picture: String
  picture_not: String
  picture_in: [String!]
  picture_not_in: [String!]
  picture_lt: String
  picture_lte: String
  picture_gt: String
  picture_gte: String
  picture_contains: String
  picture_not_contains: String
  picture_starts_with: String
  picture_not_starts_with: String
  picture_ends_with: String
  picture_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [PictureDataWhereInput!]
  OR: [PictureDataWhereInput!]
  NOT: [PictureDataWhereInput!]
}

input PictureDataWhereUniqueInput {
  id: ID
}

type Query {
  cardData(where: CardDataWhereUniqueInput!): CardData
  cardDatas(where: CardDataWhereInput, orderBy: CardDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CardData]!
  cardDatasConnection(where: CardDataWhereInput, orderBy: CardDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardDataConnection!
  commentDatas(where: CommentDataWhereInput, orderBy: CommentDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CommentData]!
  commentDatasConnection(where: CommentDataWhereInput, orderBy: CommentDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentDataConnection!
  likeDatas(where: LikeDataWhereInput, orderBy: LikeDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LikeData]!
  likeDatasConnection(where: LikeDataWhereInput, orderBy: LikeDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeDataConnection!
  notificaitonDescriptions(where: NotificaitonDescriptionWhereInput, orderBy: NotificaitonDescriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NotificaitonDescription]!
  notificaitonDescriptionsConnection(where: NotificaitonDescriptionWhereInput, orderBy: NotificaitonDescriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificaitonDescriptionConnection!
  notificationData(where: NotificationDataWhereUniqueInput!): NotificationData
  notificationDatas(where: NotificationDataWhereInput, orderBy: NotificationDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NotificationData]!
  notificationDatasConnection(where: NotificationDataWhereInput, orderBy: NotificationDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationDataConnection!
  pictureData(where: PictureDataWhereUniqueInput!): PictureData
  pictureDatas(where: PictureDataWhereInput, orderBy: PictureDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PictureData]!
  pictureDatasConnection(where: PictureDataWhereInput, orderBy: PictureDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PictureDataConnection!
  storyData(where: StoryDataWhereUniqueInput!): StoryData
  storyDatas(where: StoryDataWhereInput, orderBy: StoryDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StoryData]!
  storyDatasConnection(where: StoryDataWhereInput, orderBy: StoryDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryDataConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type StoryData {
  id: ID!
  nameOfTheStoryProvider: String!
  Story: [String!]!
  time: DateTime!
}

type StoryDataConnection {
  pageInfo: PageInfo!
  edges: [StoryDataEdge]!
  aggregate: AggregateStoryData!
}

input StoryDataCreateInput {
  nameOfTheStoryProvider: String!
  Story: StoryDataCreateStoryInput
  time: DateTime!
}

input StoryDataCreateStoryInput {
  set: [String!]
}

type StoryDataEdge {
  node: StoryData!
  cursor: String!
}

enum StoryDataOrderByInput {
  id_ASC
  id_DESC
  nameOfTheStoryProvider_ASC
  nameOfTheStoryProvider_DESC
  time_ASC
  time_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StoryDataPreviousValues {
  id: ID!
  nameOfTheStoryProvider: String!
  Story: [String!]!
  time: DateTime!
}

type StoryDataSubscriptionPayload {
  mutation: MutationType!
  node: StoryData
  updatedFields: [String!]
  previousValues: StoryDataPreviousValues
}

input StoryDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoryDataWhereInput
  AND: [StoryDataSubscriptionWhereInput!]
  OR: [StoryDataSubscriptionWhereInput!]
  NOT: [StoryDataSubscriptionWhereInput!]
}

input StoryDataUpdateInput {
  nameOfTheStoryProvider: String
  Story: StoryDataUpdateStoryInput
  time: DateTime
}

input StoryDataUpdateStoryInput {
  set: [String!]
}

input StoryDataWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nameOfTheStoryProvider: String
  nameOfTheStoryProvider_not: String
  nameOfTheStoryProvider_in: [String!]
  nameOfTheStoryProvider_not_in: [String!]
  nameOfTheStoryProvider_lt: String
  nameOfTheStoryProvider_lte: String
  nameOfTheStoryProvider_gt: String
  nameOfTheStoryProvider_gte: String
  nameOfTheStoryProvider_contains: String
  nameOfTheStoryProvider_not_contains: String
  nameOfTheStoryProvider_starts_with: String
  nameOfTheStoryProvider_not_starts_with: String
  nameOfTheStoryProvider_ends_with: String
  nameOfTheStoryProvider_not_ends_with: String
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  AND: [StoryDataWhereInput!]
  OR: [StoryDataWhereInput!]
  NOT: [StoryDataWhereInput!]
}

input StoryDataWhereUniqueInput {
  id: ID
  nameOfTheStoryProvider: String
}

type Subscription {
  cardData(where: CardDataSubscriptionWhereInput): CardDataSubscriptionPayload
  commentData(where: CommentDataSubscriptionWhereInput): CommentDataSubscriptionPayload
  likeData(where: LikeDataSubscriptionWhereInput): LikeDataSubscriptionPayload
  notificaitonDescription(where: NotificaitonDescriptionSubscriptionWhereInput): NotificaitonDescriptionSubscriptionPayload
  notificationData(where: NotificationDataSubscriptionWhereInput): NotificationDataSubscriptionPayload
  pictureData(where: PictureDataSubscriptionWhereInput): PictureDataSubscriptionPayload
  storyData(where: StoryDataSubscriptionWhereInput): StoryDataSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: UUID!
  name: String
  profilePicture: String
  Followers: Int
  Following: Int
  Links: String
  Bio: String
  PhotosOfTheProfile: PictureData
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String
  profilePicture: String
  Followers: Int
  Following: Int
  Links: String
  Bio: String
  PhotosOfTheProfile: PictureDataCreateOneInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  profilePicture_ASC
  profilePicture_DESC
  Followers_ASC
  Followers_DESC
  Following_ASC
  Following_DESC
  Links_ASC
  Links_DESC
  Bio_ASC
  Bio_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: UUID!
  name: String
  profilePicture: String
  Followers: Int
  Following: Int
  Links: String
  Bio: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  profilePicture: String
  Followers: Int
  Following: Int
  Links: String
  Bio: String
  PhotosOfTheProfile: PictureDataUpdateOneInput
}

input UserWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  profilePicture: String
  profilePicture_not: String
  profilePicture_in: [String!]
  profilePicture_not_in: [String!]
  profilePicture_lt: String
  profilePicture_lte: String
  profilePicture_gt: String
  profilePicture_gte: String
  profilePicture_contains: String
  profilePicture_not_contains: String
  profilePicture_starts_with: String
  profilePicture_not_starts_with: String
  profilePicture_ends_with: String
  profilePicture_not_ends_with: String
  Followers: Int
  Followers_not: Int
  Followers_in: [Int!]
  Followers_not_in: [Int!]
  Followers_lt: Int
  Followers_lte: Int
  Followers_gt: Int
  Followers_gte: Int
  Following: Int
  Following_not: Int
  Following_in: [Int!]
  Following_not_in: [Int!]
  Following_lt: Int
  Following_lte: Int
  Following_gt: Int
  Following_gte: Int
  Links: String
  Links_not: String
  Links_in: [String!]
  Links_not_in: [String!]
  Links_lt: String
  Links_lte: String
  Links_gt: String
  Links_gte: String
  Links_contains: String
  Links_not_contains: String
  Links_starts_with: String
  Links_not_starts_with: String
  Links_ends_with: String
  Links_not_ends_with: String
  Bio: String
  Bio_not: String
  Bio_in: [String!]
  Bio_not_in: [String!]
  Bio_lt: String
  Bio_lte: String
  Bio_gt: String
  Bio_gte: String
  Bio_contains: String
  Bio_not_contains: String
  Bio_starts_with: String
  Bio_not_starts_with: String
  Bio_ends_with: String
  Bio_not_ends_with: String
  PhotosOfTheProfile: PictureDataWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: UUID
  name: String
}

scalar UUID
`