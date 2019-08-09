-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2019 at 07:14 AM
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
-- Table structure for table `t_answer`
--

CREATE TABLE `t_answer` (
  `a_id` int(50) NOT NULL,
  `a_answer` varchar(600) NOT NULL,
  `u_name` varchar(20) NOT NULL,
  `q_id` int(20) NOT NULL,
  `a_rating` varchar(20) DEFAULT NULL,
  `a_report` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_answer`
--

INSERT INTO `t_answer` (`a_id`, `a_answer`, `u_name`, `q_id`, `a_rating`, `a_report`) VALUES
(15, 'move the move_uploaded_file() function to the else ', 'rifat', 56, '5%', 0),
(16, 'not sure what is the problem ', 'rahul', 56, NULL, 0),
(17, 'NOTEPAD++', 'rifat', 2, NULL, 0),
(24, 'AA', 'rifat', 56, NULL, 0),
(25, 'adcac', 'rifat', 56, NULL, 0),
(26, 'adcdac', 'rifat', 56, NULL, 0),
(27, 'cadcacad', 'rifat', 56, NULL, 0),
(28, 'adcadcadcad', 'rifat', 56, NULL, 0),
(29, 's', 'rifat', 56, NULL, 0),
(30, 'ok', 'rifat', 57, NULL, 0),
(31, 'advadvadv', 'rifat', 56, NULL, 0),
(32, 'cacadcadv', 'rifat', 56, NULL, 0),
(33, 'ok', 'rifat', 56, NULL, 0),
(34, 'ok from rifat', 'rifat', 56, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `t_help`
--

CREATE TABLE `t_help` (
  `h_id` int(5) NOT NULL,
  `h_ask` varchar(1000) NOT NULL,
  `h_answer` varchar(1000) NOT NULL,
  `h_reputation` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `u_name` varchar(20) DEFAULT NULL,
  `q_report` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_question`
--

INSERT INTO `t_question` (`q_id`, `q_title`, `q_question`, `q_picture`, `q_rating`, `u_name`, `q_report`) VALUES
(56, 'uploading picture problem', 'I was trying to upload a picture to the server.but some problem occurred. I am too mush worried about it my project submission is near .I uploaded the problem screenshot.', 'ss/1544942379.png', 10, 'sifat', 0),
(57, 'what is cs', 'whats is crux solver', NULL, 14, 'rahul', 0),
(58, 'what is node js', 'what is node js ', NULL, 15, 'rifat', 0);

-- --------------------------------------------------------

--
-- Table structure for table `t_tag`
--

CREATE TABLE `t_tag` (
  `t_id` int(11) NOT NULL,
  `t_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_tag`
--

INSERT INTO `t_tag` (`t_id`, `t_name`) VALUES
(1, 'c#'),
(2, 'java'),
(3, 'javascript'),
(4, 'node.js');

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `u_id` int(20) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `u_password` varchar(20) NOT NULL,
  `u_dob(y-m-d)` date DEFAULT NULL,
  `u_gender` varchar(10) DEFAULT NULL,
  `u_email` varchar(40) NOT NULL,
  `purl` varchar(100) DEFAULT NULL,
  `u_reputation` int(20) NOT NULL,
  `u_report` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`u_id`, `u_name`, `u_password`, `u_dob(y-m-d)`, `u_gender`, `u_email`, `purl`, `u_reputation`, `u_report`) VALUES
(1, 'rifat', '1', '1995-08-24', 'male', 'rifatron999@gmail.com', 'uploads/rifat.jpg', 10005, 0),
(2, 'sifat', '789', '1995-08-24', 'male', 'sifat@gmail.com', 'uploads/sifat.jpg', 1500, 0),
(3, 'rahul', '456', '1995-08-24', 'Male', 'rahul@gmail.com', 'uploads/rahul.jpg', 700, 0),
(21, 'irin', '1', NULL, 'female', 'irin@gmail.com', NULL, 1005, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_answer`
--
ALTER TABLE `t_answer`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `t_help`
--
ALTER TABLE `t_help`
  ADD PRIMARY KEY (`h_id`);

--
-- Indexes for table `t_question`
--
ALTER TABLE `t_question`
  ADD PRIMARY KEY (`q_id`);

--
-- Indexes for table `t_tag`
--
ALTER TABLE `t_tag`
  ADD PRIMARY KEY (`t_id`),
  ADD UNIQUE KEY `t_name` (`t_name`);

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
-- AUTO_INCREMENT for table `t_answer`
--
ALTER TABLE `t_answer`
  MODIFY `a_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `t_question`
--
ALTER TABLE `t_question`
  MODIFY `q_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `t_tag`
--
ALTER TABLE `t_tag`
  MODIFY `t_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `u_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
