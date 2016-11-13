/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : personal

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2016-11-13 16:33:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `dictionaries`
-- ----------------------------
DROP TABLE IF EXISTS `dictionaries`;
CREATE TABLE `dictionaries` (
  `DictionariesId` varchar(50) NOT NULL,
  `DictionariesCode` varchar(50) DEFAULT NULL,
  `DictionariesName` varchar(50) DEFAULT NULL,
  `DictionariesValue` int(11) DEFAULT NULL,
  `Comments` varchar(50) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `ParentId` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`DictionariesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dictionaries
-- ----------------------------

-- ----------------------------
-- Table structure for `saysomeing`
-- ----------------------------
DROP TABLE IF EXISTS `saysomeing`;
CREATE TABLE `saysomeing` (
  `ID` varchar(50) NOT NULL DEFAULT '' COMMENT '无意义主键',
  `UserId` varchar(50) DEFAULT NULL COMMENT '用户id',
  `SaySomeingId` varchar(50) DEFAULT NULL COMMENT '说说的id',
  `Content` varchar(500) DEFAULT NULL COMMENT '说说内容',
  `CreateDate` datetime DEFAULT NULL COMMENT '创建日期',
  `DeleteMark` int(11) DEFAULT NULL COMMENT '删除标记',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='发表的说说表:修改设置的日志表去';

-- ----------------------------
-- Records of saysomeing
-- ----------------------------

-- ----------------------------
-- Table structure for `saysomeingimages`
-- ----------------------------
DROP TABLE IF EXISTS `saysomeingimages`;
CREATE TABLE `saysomeingimages` (
  `ImagesId` varchar(50) NOT NULL DEFAULT '',
  `SaySomeingId` varchar(50) DEFAULT NULL,
  `ImagePath` varchar(100) DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`ImagesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='记录一条述说内的图片地址图片地址';

-- ----------------------------
-- Records of saysomeingimages
-- ----------------------------

-- ----------------------------
-- Table structure for `saysomeingreplay`
-- ----------------------------
DROP TABLE IF EXISTS `saysomeingreplay`;
CREATE TABLE `saysomeingreplay` (
  `ReplayId` varchar(50) NOT NULL,
  `SaySomeingId` varchar(50) DEFAULT NULL,
  `ReplayUserId` varchar(50) DEFAULT NULL,
  `ReplayName` varchar(50) DEFAULT NULL,
  `ReplayContent` varchar(200) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `DeleteMark` int(11) DEFAULT NULL,
  `IsStartMark` int(11) DEFAULT NULL,
  `ParentId` varchar(50) DEFAULT NULL COMMENT '记录回复内容的层级关系,0：root',
  PRIMARY KEY (`ReplayId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='记录一条说说的回复记录,点赞标记';

-- ----------------------------
-- Records of saysomeingreplay
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `UserId` varchar(50) NOT NULL DEFAULT '' COMMENT '用户表主键',
  `UserName` varchar(50) DEFAULT NULL COMMENT '用户名',
  `CreateDate` datetime DEFAULT NULL COMMENT '修改日期',
  `Sex` int(11) DEFAULT NULL COMMENT '性别',
  `HeadPortrait` varchar(100) DEFAULT NULL COMMENT '头像图片',
  `BornDate` datetime DEFAULT NULL COMMENT '出生日期',
  `Telephone` varchar(20) DEFAULT NULL COMMENT '电话',
  `Location` varchar(50) DEFAULT NULL COMMENT '所在地',
  `Job` varchar(50) DEFAULT NULL COMMENT '工作',
  `Comments` varchar(500) DEFAULT NULL COMMENT '个性签名',
  `Others` varchar(500) DEFAULT NULL COMMENT '其他',
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户详情表，记录用户变更个人信息的历史记录，最新一个为最新详情状态';

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Table structure for `userlabel`
-- ----------------------------
DROP TABLE IF EXISTS `userlabel`;
CREATE TABLE `userlabel` (
  `LabelId` varchar(50) NOT NULL,
  `UserId` varchar(50) NOT NULL,
  `Content` int(11) DEFAULT NULL COMMENT '字典表读取',
  PRIMARY KEY (`LabelId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户标签';

-- ----------------------------
-- Records of userlabel
-- ----------------------------
