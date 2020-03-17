-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 18, 2020 at 12:37 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `urlshort`
--

-- --------------------------------------------------------

--
-- Table structure for table `short_url`
--

CREATE TABLE `short_url` (
  `id` int(20) NOT NULL,
  `title` varchar(215) NOT NULL,
  `short_url` varchar(215) NOT NULL,
  `shortcode` varchar(20) NOT NULL,
  `url` varchar(215) NOT NULL,
  `user_id` int(20) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `short_url`
--

INSERT INTO `short_url` (`id`, `title`, `short_url`, `shortcode`, `url`, `user_id`, `created_at`) VALUES
(61, 'http://www.facebook.com', 'localhost:5000/disini', 'disini', 'http://www.facebook.com', 23, '2020-03-18'),
(62, 'http://www.kaskus.com', 'localhost:5000/nyhCWc5A', 'nyhCWc5A', 'http://www.kaskus.com', 21, '2020-03-18');

-- --------------------------------------------------------

--
-- Table structure for table `track`
--

CREATE TABLE `track` (
  `uuid` int(20) NOT NULL,
  `id` int(20) NOT NULL,
  `ip_address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(20) NOT NULL,
  `username` varchar(215) NOT NULL,
  `email` varchar(215) NOT NULL,
  `password` varchar(215) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `email`, `password`) VALUES
(15, 'deny', 'deny@gmail.com', '1234'),
(16, 'dadang', 'dadang@gmail.com', '6a6589a467793bf7e946c0eec282347b'),
(17, 'ari', 'ari@gmail.com', '6a6589a467793bf7e946c0eec282347b'),
(18, 'dedi', 'dedi@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(19, 'ada', 'ada@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(20, 'dimas galih', 'dimasgalih@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(21, 'putrax', 'putrax@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(22, 'dendy', 'dendy@gmail.com', '72dfe24bdd0f26388d3f573fca46525e'),
(23, 'endri', 'endri@gmail.com', '202cb962ac59075b964b07152d234b70'),
(24, 'hamzah', 'hamzah@gmail.com', '202cb962ac59075b964b07152d234b70');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `short_url`
--
ALTER TABLE `short_url`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `track`
--
ALTER TABLE `track`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `short_url_id` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `short_url`
--
ALTER TABLE `short_url`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `track`
--
ALTER TABLE `track`
  MODIFY `uuid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `short_url`
--
ALTER TABLE `short_url`
  ADD CONSTRAINT `short_url_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `track`
--
ALTER TABLE `track`
  ADD CONSTRAINT `track_ibfk_1` FOREIGN KEY (`id`) REFERENCES `short_url` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
