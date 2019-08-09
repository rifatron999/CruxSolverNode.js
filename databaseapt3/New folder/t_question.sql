-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2019 at 07:46 AM
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
-- Database: `kawsarulalam16-31328-1`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_question`
--

CREATE TABLE `t_question` (
  `q_id` int(20) NOT NULL,
  `q_title` varchar(50) NOT NULL,
  `q_question` varchar(1000) DEFAULT NULL,
  `q_picture` varchar(500) DEFAULT NULL,
  `q_rating` int(11) DEFAULT NULL,
  `k_id` int(20) DEFAULT NULL,
  `r_id` int(20) NOT NULL DEFAULT '0',
  `u_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_question`
--

INSERT INTO `t_question` (`q_id`, `q_title`, `q_question`, `q_picture`, `q_rating`, `k_id`, `r_id`, `u_name`) VALUES
(56, 'uploading picture problem', 'I was trying to upload a picture to the server.but some problem occurred. I am too mush worried about it my project submission is near .I uploaded the problem screenshot.', 'ss/1544942379.png', NULL, NULL, 0, 'sifat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_question`
--
ALTER TABLE `t_question`
  ADD PRIMARY KEY (`q_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_question`
--
ALTER TABLE `t_question`
  MODIFY `q_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
