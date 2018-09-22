-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 13, 2018 at 02:05 AM
-- Server version: 5.5.49-0ubuntu0.14.04.1
-- PHP Version: 5.6.4-4ubuntu6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `RND_Shashwat_19Jul18_Ravi`
--

-- --------------------------------------------------------

--
-- Table structure for table `webform_scheduled_email`
--

CREATE TABLE IF NOT EXISTS `webform_scheduled_email` (
  `eid` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `webform_id` varchar(32) NOT NULL,
  `entity_type` varchar(255) NOT NULL,
  `entity_id` varchar(255) NOT NULL,
  `sid` int(10) unsigned NOT NULL,
  `handler_id` int(10) unsigned NOT NULL,
  `state` varchar(32) NOT NULL,
  `send` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`eid`),
  UNIQUE KEY `eid` (`eid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
