

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `created_at`, `updated_at`) VALUES
(1, 'najjo admin', 'ana@najjohotels.com', '2024-10-22 08:50:28', '$2y$12$jY7OvNJAiLZjbX5gKsSDcOhQ6UW4/dBeRzbyndMzJ.sSbBifTsKcm', '2024-10-22 08:50:29', '2024-10-22 08:50:29'),
(8, 'Super Admin', 'superadmin@demohotel.com', '2024-10-28 02:34:10', '$2y$12$ZVl6Bmg30YYiMWb0aF0b6u..h3oA.kai1ng/Y7bjoQyPZVDTctqne','2024-10-28 02:34:11', '2024-10-29 14:00:50'),
(10, 'sdsd', 'resto@demohotel.com', NULL, '$2y$12$vo/IOMfM3VeRRNdpNQIx2e1.tS1X94XpVYrAY8EfqIq8GwvY.vVwi', '2024-11-05 00:39:35', '2024-11-05 00:39:35'),
(11, 'sdsd', 'cresto@demohotel.com', NULL, '$2y$12$OD6kOfnxsctR90mBNdnZzOjZra9NjaTQHgS7TJ7vwBVDvdqGGkRgG', '2024-11-05 00:45:24', '2024-11-05 00:45:24'),
(12, 'Housekeeping', 'hk@demohotel.com', NULL, '$2y$12$Zf/7Vvtjf6RcAVJI9vtBZeGBrwBh5crLV/vmaiHacNwWxjY5mdo/i', '2024-11-14 18:45:24', '2024-11-14 18:45:24');


INSERT INTO `hotels` (`id`, `name`, `logo`, `created_at`, `updated_at`) VALUES
(3, 'Demo Hotel', 'logo/ZmtK8RYcyKfmchj42z46VLz1LWml116VyUnp4gOV.jpg', '2024-10-28 02:34:10', '2024-10-28 02:34:10');


INSERT INTO `subrooms` (`id`, `room_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 9, '121','2024-10-22 09:15:31', '2024-10-22 09:15:31'),
(16, 6, '101',  '2024-10-29 14:24:27', '2024-10-29 14:24:27'),
(17, 6, '102', '2024-10-29 14:24:27', '2024-10-29 14:24:27'),
(18, 6, '103',  '2024-10-29 14:24:27', '2024-10-29 14:24:27'),
(19, 5, '104',  '2024-10-29 14:24:47', '2024-10-29 14:24:47'),
(32, 7, '182',  '2024-10-31 05:05:04', '2024-10-31 05:05:04'),
(33, 7, '183',  '2024-10-31 05:05:04', '2024-10-31 05:05:04'),
(38, 9, '304',  '2024-11-14 18:38:44', '2024-11-14 18:38:44');


INSERT INTO `rooms` (`id`, `hotel_id`, `name`, `type`, `number_of_bed`,  `created_at`, `updated_at`) VALUES
(5, 3, 'Superior King', 'L.1', '5', '2024-10-28 02:42:20', '2024-10-29 14:24:13'),
(6, 3, 'Superior Twin', 'L.1', '1', '2024-10-29 14:02:02', '2024-10-29 14:24:27'),
(7, 3, 'Deluxe', 'L.3', '1',  '2024-10-29 14:31:27', '2024-10-29 14:31:27'),
(9, 3, 'Family', 'King & Twin', '3', '2024-11-14 18:38:44', '2024-11-14 18:38:44');

