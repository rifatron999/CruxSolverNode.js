-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2019 at 06:00 PM
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
-- Table structure for table `t_answer`
--

CREATE TABLE `t_answer` (
  `a_id` int(50) NOT NULL,
  `a_answer` varchar(600) NOT NULL,
  `u_name` varchar(20) NOT NULL,
  `q_id` int(20) NOT NULL,
  `a_rating` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_answer`
--

INSERT INTO `t_answer` (`a_id`, `a_answer`, `u_name`, `q_id`, `a_rating`) VALUES
(15, 'move the move_uploaded_file() function to the else ', 'rifat', 56, '5%'),
(16, 'not sure what is the problem ', 'rahul', 56, NULL),
(17, 'NOTEPAD++', 'rifat', 2, NULL),
(24, 'AA', 'rifat', 56, NULL),
(25, 'adcac', 'rifat', 56, NULL),
(26, 'adcdac', 'rifat', 56, NULL),
(27, 'cadcacad', 'rifat', 56, NULL),
(28, 'adcadcadcad', 'rifat', 56, NULL),
(29, 's', 'rifat', 56, NULL),
(30, 'ok', 'rifat', 57, NULL),
(31, 'advadvadv', 'rifat', 56, NULL),
(32, 'cacadcadv', 'rifat', 56, NULL),
(33, 'ok', 'rifat', 56, NULL),
(34, 'ok from rifat', 'rifat', 56, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_answer`
--
ALTER TABLE `t_answer`
  ADD PRIMARY KEY (`a_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_answer`
--
ALTER TABLE `t_answer`
  MODIFY `a_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
