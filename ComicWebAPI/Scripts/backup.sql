INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'8af6fd95-7dbb-43f3-b914-f07959ce60fb', N'user@gmail.com', N'USER@GMAIL.COM', N'user@gmail.com', N'USER@GMAIL.COM', 1, N'AQAAAAEAACcQAAAAECTYJ6yQWm3Ut8M6fs15l1LxIlF1sURhH8LLlx7bOk8DMhPeI71rZT22dk+3zUTlkg==', N'Z7S2DVKE7MN7HCV7YGDRNRM6M5RWVQNJ', N'921a6e41-589d-485d-a891-ac7659770d69', NULL, 0, 0, NULL, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[Comics] ON 
GO
INSERT [dbo].[Comics] ([Id], [ComicName], [Price], [Pages]) VALUES (1, N'Secret Empire #10', 15, 50)
GO
INSERT [dbo].[Comics] ([Id], [ComicName], [Price], [Pages]) VALUES (2, N'Venom First Host #1', 25, 60)
GO
INSERT [dbo].[Comics] ([Id], [ComicName], [Price], [Pages]) VALUES (3, N'Web of Venom: Carnage Born #1 Ian Bederman Variant Cover', 20, 30)
GO
INSERT [dbo].[Comics] ([Id], [ComicName], [Price], [Pages]) VALUES (5, N'Black Panther #1 CGC 7.5', 35, 40)
GO
INSERT [dbo].[Comics] ([Id], [ComicName], [Price], [Pages]) VALUES (6, N'Doctor Strange And The Sorcerers Supreme Vol. 2', 35, 40)
GO
SET IDENTITY_INSERT [dbo].[Comics] OFF
GO
