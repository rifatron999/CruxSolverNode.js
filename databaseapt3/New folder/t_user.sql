-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2019 at 04:21 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csnodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `u_id` int(20) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `u_password` varchar(20) NOT NULL,
  `u_dob` varchar(20) DEFAULT NULL,
  `u_gender` varchar(10) DEFAULT NULL,
  `u_email` varchar(40) NOT NULL,
  `purl` varchar(100) DEFAULT NULL,
  `u_reputation` int(20) DEFAULT NULL,
  `u_report` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`u_id`, `u_name`, `u_password`, `u_dob`, `u_gender`, `u_email`, `purl`, `u_reputation`, `u_report`) VALUES
(21, 'irin', '1', '24-08-1995', 'female', 'irin@gmail.com', NULL, 1005, 1),
(28, 'zeba', '1', '24-08-1995', 'felame', 'zeba@gmail.com', '', 0, 1),
(32, 'rifat', '1', '24-08-1995', 'male', 'rifatron999@gmail.com', NULL, 10000, 1),
(34, 'rakib', '123', '24-08-1993', 'male', 'rakib@gmail.com', '', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `email` (`u_email`),
  ADD UNIQUE KEY `u_name` (`u_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `u_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
