USE [master]
GO
/****** Object:  Database [QuanLyKhachSan]    Script Date: 5/1/2021 1:49:30 AM ******/
CREATE DATABASE [QuanLyKhachSan]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'QuanLyKhachSan', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\QuanLyKhachSan.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'QuanLyKhachSan_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\QuanLyKhachSan_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [QuanLyKhachSan] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [QuanLyKhachSan].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [QuanLyKhachSan] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET ARITHABORT OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [QuanLyKhachSan] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [QuanLyKhachSan] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [QuanLyKhachSan] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET  ENABLE_BROKER 
GO
ALTER DATABASE [QuanLyKhachSan] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [QuanLyKhachSan] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [QuanLyKhachSan] SET  MULTI_USER 
GO
ALTER DATABASE [QuanLyKhachSan] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [QuanLyKhachSan] SET DB_CHAINING OFF 
GO
ALTER DATABASE [QuanLyKhachSan] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [QuanLyKhachSan] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [QuanLyKhachSan] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [QuanLyKhachSan] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [QuanLyKhachSan] SET QUERY_STORE = OFF
GO
USE [QuanLyKhachSan]
GO
/****** Object:  Table [dbo].[tChiTietDatPhong]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tChiTietDatPhong](
	[MaDP] [char](15) NOT NULL,
	[LoaiPhong] [char](15) NOT NULL,
	[SLPhongDat] [tinyint] NOT NULL,
 CONSTRAINT [pk_tChiTietDatPhong] PRIMARY KEY CLUSTERED 
(
	[MaDP] ASC,
	[LoaiPhong] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tChiTietKH]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tChiTietKH](
	[MaKH] [char](20) NOT NULL,
	[LoaiKH] [char](15) NULL,
	[TenKH] [nvarchar](50) NULL,
	[NgaySinh] [datetime] NULL,
	[Phai] [bit] NOT NULL,
	[DiaChi] [nvarchar](100) NULL,
	[DienThoai] [nvarchar](13) NULL,
	[DiemTichLuy] [int] NULL,
	[Email] [nvarchar](30) NULL,
	[password] [nvarchar](50) NULL,
 CONSTRAINT [pk_tChiTietKH] PRIMARY KEY CLUSTERED 
(
	[MaKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tDangKy]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tDangKy](
	[MaDK] [char](15) NOT NULL,
	[MaKH] [char](20) NULL,
	[SoPhong] [char](15) NULL,
	[NgayVao] [datetime] NULL,
	[NgayRa] [datetime] NULL,
 CONSTRAINT [pk_tDangKy] PRIMARY KEY CLUSTERED 
(
	[MaDK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tDanhGia]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tDanhGia](
	[MaDG] [char](15) NOT NULL,
	[NoiDung] [nvarchar](4000) NULL,
	[NguoiDanhGia] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[DiaChi] [nvarchar](50) NULL,
	[ViTri] [nchar](1) NULL,
	[PhucVu] [nchar](1) NULL,
	[TienNghi] [nchar](1) NULL,
	[GiaCa] [nchar](1) NULL,
	[VeSinh] [nchar](1) NULL,
	[MonAn] [nchar](1) NULL,
 CONSTRAINT [pk_tDanhGiay] PRIMARY KEY CLUSTERED 
(
	[MaDG] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tDatPhong]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tDatPhong](
	[MaDP] [char](15) NOT NULL,
	[MaKH] [char](20) NULL,
	[Email] [nvarchar](250) NULL,
	[GhiChu] [nvarchar](150) NULL,
	[NgayVao] [datetime] NULL,
	[NgayRa] [datetime] NULL,
 CONSTRAINT [pk_tDatPhongy] PRIMARY KEY CLUSTERED 
(
	[MaDP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tDoanhThu]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tDoanhThu](
	[MaDK] [char](15) NOT NULL,
	[LoaiPhong] [char](15) NULL,
	[SoNgayO] [int] NULL,
	[ThucThu] [float] NULL,
 CONSTRAINT [PK_tDoanhThu] PRIMARY KEY CLUSTERED 
(
	[MaDK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tLoaiKhachHang]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tLoaiKhachHang](
	[LoaiKH] [char](15) NOT NULL,
	[DienGiai] [nvarchar](50) NULL,
 CONSTRAINT [PK_tLoaiKhachHang] PRIMARY KEY CLUSTERED 
(
	[LoaiKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tLoaiPhong]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tLoaiPhong](
	[LoaiPhong] [char](15) NOT NULL,
	[MoTa] [nvarchar](50) NULL,
	[DonGia] [int] NULL,
	[HinhAnh] [nvarchar](50) NULL,
	[DienTich] [nchar](10) NULL,
	[SoGiuong] [nchar](1) NULL,
	[SoPhongNgu] [nchar](1) NULL,
	[BonTam] [nchar](1) NULL,
	[SoPhongTam] [nchar](1) NULL,
	[SoLuongPhong] [int] NULL,
	[SoNguoi] [int] NULL,
 CONSTRAINT [PK_tLoaiPhong] PRIMARY KEY CLUSTERED 
(
	[LoaiPhong] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tSoPhong_LoaiPhong]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tSoPhong_LoaiPhong](
	[SoPhong] [char](15) NOT NULL,
	[LoaiPhong] [char](15) NOT NULL,
	[GhiChu] [nvarchar](50) NULL,
 CONSTRAINT [PK_tSoPhong_LoaiPhong_1] PRIMARY KEY CLUSTERED 
(
	[SoPhong] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tTaiKhoan]    Script Date: 5/1/2021 1:49:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tTaiKhoan](
	[Username] [nvarchar](20) NOT NULL,
	[Password] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[tDangKy] ([MaDK], [MaKH], [SoPhong], [NgayVao], [NgayRa]) VALUES (N'0003           ', N'010                 ', N'204            ', CAST(N'2021-04-06T00:00:00.000' AS DateTime), CAST(N'2021-04-21T00:00:00.000' AS DateTime))
INSERT [dbo].[tDangKy] ([MaDK], [MaKH], [SoPhong], [NgayVao], [NgayRa]) VALUES (N'001            ', N'001                 ', N'201            ', CAST(N'2021-04-20T00:00:00.000' AS DateTime), CAST(N'2021-04-22T00:00:00.000' AS DateTime))
INSERT [dbo].[tDangKy] ([MaDK], [MaKH], [SoPhong], [NgayVao], [NgayRa]) VALUES (N'002            ', N'003                 ', N'303            ', CAST(N'2021-04-20T00:00:00.000' AS DateTime), CAST(N'2021-04-22T00:00:00.000' AS DateTime))
INSERT [dbo].[tDangKy] ([MaDK], [MaKH], [SoPhong], [NgayVao], [NgayRa]) VALUES (N'0132           ', N'008                 ', N'501            ', CAST(N'2021-04-19T00:00:00.000' AS DateTime), CAST(N'2021-04-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[tDanhGia] ([MaDG], [NoiDung], [NguoiDanhGia], [email], [DiaChi], [ViTri], [PhucVu], [TienNghi], [GiaCa], [VeSinh], [MonAn]) VALUES (N'00001          ', N'Tôi thấy dịch vụ cơ bản cũng ở mức bình thường, không có gì nổi bật nhưng cũng không có gì phàn nàn. Vị trí đi lại thuận tiện, tôi đánh giá tốt vị trí của khách sạn. Nhân viên cũng ok, vệ sinh ổn, tôi thấy giá như vậy là hơi cao', N'Nguyễn Trường An', N'ngtan@gmail.com', N'Hà Nội', N'8', N'7', N'7', N'6', N'7', N'7')
INSERT [dbo].[tDanhGia] ([MaDG], [NoiDung], [NguoiDanhGia], [email], [DiaChi], [ViTri], [PhucVu], [TienNghi], [GiaCa], [VeSinh], [MonAn]) VALUES (N'00002          ', N'Khách sạn xứng đáng với tiêu chuẩn 5 sao, không gian khách sạn rất sang trọng và đẹp. Chương trình giải trí, ăn uống cũng như các tiện ích trong phòng đầy đủ cả. Nhân viên làm việc nhanh nhẹn, có hệ thống. Căn phòng của tôi ở tốt, view cũng tuyệt. Xét về giá thì dịch vụ tương xứng', N'Trần Công Tâm', N'trctam@gmail.com', N'Thái Nguyên', N'7', N'8', N'8', N'8', N'5', N'5')
INSERT [dbo].[tDanhGia] ([MaDG], [NoiDung], [NguoiDanhGia], [email], [DiaChi], [ViTri], [PhucVu], [TienNghi], [GiaCa], [VeSinh], [MonAn]) VALUES (N'00003          ', N'Theo cảm nhận khách quan của cá nhân tôi thì về cơ sở vật chất, nội thất được nhưng về cung cách phục vụ của nhân viên thì không tốt, họ không nhiệt tình, nhiều khi họ còn tỏ thái độ gắt gỏng với trẻ con. Khách sạn 5 sao gì mà không tự động dọn phòng mỗi ngày, đợi khách nhắc thì mới nhớ dọn phòng cho khách', N'Nguyễn Thị Như Lan', N'ngtnhulan@gmail.com', N'Hải Phòng', N'7', N'6', N'6', N'6', N'6', N'6')
INSERT [dbo].[tDanhGia] ([MaDG], [NoiDung], [NguoiDanhGia], [email], [DiaChi], [ViTri], [PhucVu], [TienNghi], [GiaCa], [VeSinh], [MonAn]) VALUES (N'0004           ', N'Đây là nội dung đánh giá khách sạn', N'Test1', N'hoangminhzzz123@gmail.com', N'Thái Bình', N'7', N'8', N'8', N'6', N'8', N'7')
INSERT [dbo].[tDanhGia] ([MaDG], [NoiDung], [NguoiDanhGia], [email], [DiaChi], [ViTri], [PhucVu], [TienNghi], [GiaCa], [VeSinh], [MonAn]) VALUES (N'0005           ', N'Đây là nội dung đánh giá khách sạn 2', N'Test2', N'abc@gmail.com', N'Hà Nội', N'7', N'7', N'6', N'5', N'8', N'7')
INSERT [dbo].[tDanhGia] ([MaDG], [NoiDung], [NguoiDanhGia], [email], [DiaChi], [ViTri], [PhucVu], [TienNghi], [GiaCa], [VeSinh], [MonAn]) VALUES (N'0006           ', N'Test đánh giá', N'Harley', N'asdasdas@gmail.com', N'Hồ Chí Minh City', N'7', N'7', N'6', N'5', N'8', N'7')
GO
INSERT [dbo].[tDatPhong] ([MaDP], [MaKH], [Email], [GhiChu], [NgayVao], [NgayRa]) VALUES (N'001            ', N'010                 ', N'cuong`@gmai;l.com', N'update', CAST(N'2021-04-13T00:00:00.000' AS DateTime), CAST(N'2021-04-28T00:00:00.000' AS DateTime))
INSERT [dbo].[tDatPhong] ([MaDP], [MaKH], [Email], [GhiChu], [NgayVao], [NgayRa]) VALUES (N'002            ', N'007                 ', N'minh@utc', N'none', CAST(N'2021-04-06T00:00:00.000' AS DateTime), CAST(N'2021-04-15T00:00:00.000' AS DateTime))
INSERT [dbo].[tDatPhong] ([MaDP], [MaKH], [Email], [GhiChu], [NgayVao], [NgayRa]) VALUES (N'003            ', N'00                  ', N'Quyen123@gmail', N'non', CAST(N'2021-04-27T00:00:00.000' AS DateTime), CAST(N'2021-04-09T00:00:00.000' AS DateTime))
INSERT [dbo].[tDatPhong] ([MaDP], [MaKH], [Email], [GhiChu], [NgayVao], [NgayRa]) VALUES (N'005            ', N'006                 ', N'Kharimk1@gmail', N'hơi non', CAST(N'2021-04-19T00:00:00.000' AS DateTime), CAST(N'2021-05-01T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[tDoanhThu] ([MaDK], [LoaiPhong], [SoNgayO], [ThucThu]) VALUES (N'0003           ', N'F              ', 15, 28500000)
INSERT [dbo].[tDoanhThu] ([MaDK], [LoaiPhong], [SoNgayO], [ThucThu]) VALUES (N'001            ', N'A              ', 2, 40000000)
INSERT [dbo].[tDoanhThu] ([MaDK], [LoaiPhong], [SoNgayO], [ThucThu]) VALUES (N'002            ', N'D              ', 2, 1800000)
INSERT [dbo].[tDoanhThu] ([MaDK], [LoaiPhong], [SoNgayO], [ThucThu]) VALUES (N'003            ', N'E              ', 10, 25000000)
INSERT [dbo].[tDoanhThu] ([MaDK], [LoaiPhong], [SoNgayO], [ThucThu]) VALUES (N'0132           ', N'B              ', 11, 22000000)
GO
INSERT [dbo].[tLoaiKhachHang] ([LoaiKH], [DienGiai]) VALUES (N'1              ', N'Khách vãng lai')
INSERT [dbo].[tLoaiKhachHang] ([LoaiKH], [DienGiai]) VALUES (N'2              ', N'Khách hàng thân thiết')
INSERT [dbo].[tLoaiKhachHang] ([LoaiKH], [DienGiai]) VALUES (N'3              ', N'Khách có thẻ của công ty Bảo hiểm')
GO
INSERT [dbo].[tLoaiPhong] ([LoaiPhong], [MoTa], [DonGia], [HinhAnh], [DienTich], [SoGiuong], [SoPhongNgu], [BonTam], [SoPhongTam], [SoLuongPhong], [SoNguoi]) VALUES (N'A              ', N'Phòng đôi, một giường đôi, không gian rộng', 2000000, N'/Image/hotel/A.jpg', N'40m²      ', N'1', N'1', N'1', N'1', NULL, NULL)
INSERT [dbo].[tLoaiPhong] ([LoaiPhong], [MoTa], [DonGia], [HinhAnh], [DienTich], [SoGiuong], [SoPhongNgu], [BonTam], [SoPhongTam], [SoLuongPhong], [SoNguoi]) VALUES (N'B              ', N'Phòng đôi, vmột giường đôi, không gian hẹp', 1500000, N'/Image/hotel/B.jpg', N'35m²      ', N'1', N'1', N'1', N'1', NULL, NULL)
INSERT [dbo].[tLoaiPhong] ([LoaiPhong], [MoTa], [DonGia], [HinhAnh], [DienTich], [SoGiuong], [SoPhongNgu], [BonTam], [SoPhongTam], [SoLuongPhong], [SoNguoi]) VALUES (N'C              ', N'Phòng đơn, không gian rộng', 1000000, N'/Image/hotel/C.jpg', N'33m²      ', N'1', N'1', N'1', N'1', NULL, NULL)
INSERT [dbo].[tLoaiPhong] ([LoaiPhong], [MoTa], [DonGia], [HinhAnh], [DienTich], [SoGiuong], [SoPhongNgu], [BonTam], [SoPhongTam], [SoLuongPhong], [SoNguoi]) VALUES (N'D              ', N'Phòng đơn, không gian hẹp', 900000, N'/Image/hotel/D.jpg', N'27m²      ', N'1', N'1', N'1', N'1', NULL, NULL)
INSERT [dbo].[tLoaiPhong] ([LoaiPhong], [MoTa], [DonGia], [HinhAnh], [DienTich], [SoGiuong], [SoPhongNgu], [BonTam], [SoPhongTam], [SoLuongPhong], [SoNguoi]) VALUES (N'E              ', N'Phòng đôi, hai giường nhỏ, không gian rộng', 2500000, N'/Image/hotel/E.jpg', N'50m²      ', N'2', N'2', N'2', N'2', NULL, NULL)
INSERT [dbo].[tLoaiPhong] ([LoaiPhong], [MoTa], [DonGia], [HinhAnh], [DienTich], [SoGiuong], [SoPhongNgu], [BonTam], [SoPhongTam], [SoLuongPhong], [SoNguoi]) VALUES (N'F              ', N'Phòng đôi, hai giường nhỏ, không gian hẹp', 1900000, N'/Image/hotel/F.jpg', N'45m²      ', N'2', N'2', N'2', N'2', NULL, NULL)
INSERT [dbo].[tLoaiPhong] ([LoaiPhong], [MoTa], [DonGia], [HinhAnh], [DienTich], [SoGiuong], [SoPhongNgu], [BonTam], [SoPhongTam], [SoLuongPhong], [SoNguoi]) VALUES (N'G              ', N'Phòng mới', 1000000, N'none', N'45m²      ', N'2', N'2', N'3', N'2', 1, 1)
GO
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'101            ', N'A              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'102            ', N'A              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'103            ', N'D              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'104            ', N'E              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'105            ', N'F              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'201            ', N'A              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'202            ', N'B              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'203            ', N'F              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'204            ', N'F              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'205            ', N'A              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'301            ', N'B              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'302            ', N'D              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'303            ', N'D              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'304            ', N'C              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'305            ', N'C              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'401            ', N'E              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'402            ', N'A              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'403            ', N'D              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'404            ', N'B              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'405            ', N'B              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'501            ', N'A              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'502            ', N'B              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'503            ', N'C              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'504            ', N'D              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'505            ', N'E              ', NULL)
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'601            ', N'B              ', N'Còn trống')
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'602            ', N'F              ', NULL)
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'603            ', N'A              ', NULL)
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'604            ', N'D              ', NULL)
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'605            ', N'B              ', NULL)
INSERT [dbo].[tSoPhong_LoaiPhong] ([SoPhong], [LoaiPhong], [GhiChu]) VALUES (N'608            ', N'C              ', N'Còn trống')
GO
INSERT [dbo].[tTaiKhoan] ([Username], [Password]) VALUES (N'admin', N'admin')
GO
USE [master]
GO
ALTER DATABASE [QuanLyKhachSan] SET  READ_WRITE 
GO
