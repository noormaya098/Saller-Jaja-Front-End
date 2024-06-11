import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  TagIcon,
  Cog6ToothIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Pesanan from "./pages/penjualan/Pesanan";
import DaftarProduk from "./pages/produk/daftar-produk/DaftarProduk";
import TambahProduk from "./pages/produk/TambahProduk";
import DaftarBrand from "./pages/produk/DaftarBrand";
import DaftarEtalase from "./pages/produk/DaftarEtalase";
import VoucherToko from "./pages/promosi/VoucherToko";
import PengaturanVoucher from "./pages/promosi/pengaturanVoucher/PengaturanVoucher";
import RatingProduk from "./pages/riview/RatingProduk";
import ReportProduk from "./pages/riview/report-produk/ReportProduk";
import PengaturanToko from "./pages/pengaturan/PengaturanToko";
import PenghasilanToko from "./pages/dompetku/penghasilan-toko/PenghasilanToko";
import SaldoToko from "./pages/dompetku/saldo-toko/SaldoToko";
import RekeningBank from "./pages/dompetku/saldo-toko/tab-saldo-toko/RekeningBank";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [

  {
    title: 'Menu',
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Beranda",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <CurrencyDollarIcon {...icon} />,
        name: "Penjualan",
        element: null,
        subPages: [
          {
            name: "Pesanan",
            path: "/pejualan/pesanan",
            element: <Pesanan />,
          },
        ]
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "produk",
        path: "/produk",
        element: null,
        subPages: [
          {
            name: "daftar produk",
            path: "/produk/daftar-produk",
            element: <DaftarProduk />,
          },
          {
            name: "tambah produk",
            path: "/produk/tambah-produk",
            element: <TambahProduk />,
          },
          {
            name: "daftar brand",
            path: "/produk/daftar-brand",
            element: <DaftarBrand />,
          },
          {
            name: "daftar etalase",
            path: "/produk/daftar-etalase",
            element: <DaftarEtalase />,
          },
        ]
      },
      {
        icon: <TagIcon {...icon} />,
        name: "promosi",
        path: "/promosi",
        element: null,
        subPages: [
          {
            name: "voucher toko",
            path: "/promosi/voucher-toko",
            element: <VoucherToko />,
          },
          {
            name: "pengaturan voucher",
            path: "/promosi/pengaturan-voucher",
            element: <PengaturanVoucher />,
          },
          
        ]
      },
      {
        icon: <WalletIcon {...icon} />,
        name: "dompetku",
        path: "/dompetku",
        element: null,
        subPages: [
          {
            name: "penghasilan toko",
            path: "/dompetku/penghasilan-toko",
            element: <PenghasilanToko />,
          },          
          {
            name: "saldo toko",
            path: "/dompetku/saldo-toko",
            element: <SaldoToko />,
          },          
          {
            name: "Rekening Bank",
            path: "/dompetku/rekening-bank",
            element: <RekeningBank />,
          },          
        ]
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "review",
        path: "/review",
        element: null,
        subPages: [
          {
            name: "rating produk",
            path: "/review/rating-produk",
            element: <RatingProduk />,
          },
          {
            name: "report produk",
            path: "/review/report-produk",
            element: <ReportProduk />,
          },
          
          
        ]
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "pengaturan",
        path: "/pengaturan",
        element: null,
        subPages: [
          {
            name: "pengaturan toko",
            path: "/pengaturan/pengaturan-toko",
            element: <PengaturanToko />,
          },
        
          
          
        ]
      },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
