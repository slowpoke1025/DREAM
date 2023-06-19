/* eslint-disable react/jsx-no-target-blank */
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './templates/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Market from './pages/Market';

import AuthLayout from './templates/AuthLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import Bag from './pages/Bag';
import NotFound from './pages/NotFound';

import ExerciseChoosing from './pages/ExerciseChoosing';
import ExerciseResult from './pages/ExerciseResult';
import ExerciseModel3D from './pages/ExerciseModel3D';
import ExerciseRealTime from './pages/ExerciseRealTime';
import CouponMarket from './pages/CouponMarket';
import CouponExchange from './pages/CouponExchange';
import History from './pages/History';
import CouponKeeper from './pages/CouponKeeper';
import ExerciseInstruction from "./pages/ExerciseInstruction";


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<AuthLayout />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='market' element={<Market />} />
          <Route path='bag' element={<Bag />} />
          <Route path='history' element={<History />} />

          <Route path='exercise/'>
            <Route index element={<ExerciseChoosing />} />
            <Route path='realtime' element={<ExerciseRealTime />} />
            <Route path='result' element={<ExerciseResult />} />
            <Route path='model3D' element={<ExerciseModel3D />} />
            <Route path='instruction' element={<ExerciseInstruction />} />

          </Route>

          <Route path='coupon/' >
            <Route index element={<CouponMarket />} />
            <Route path='keeper' element={<CouponKeeper />} />
            <Route path='exchange' element={<CouponExchange />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
