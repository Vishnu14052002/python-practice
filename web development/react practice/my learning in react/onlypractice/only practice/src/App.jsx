import { StrictMode, useState } from 'react'
import './App.css'
import { EnterTaskFun } from './EnterTask'
import ParentComponent from './passing values/ParentComponent'
import ViewTask from './ViewTask'
import Comp1 from './again passing values/Comp1'
import Counter from './counter/counter'
import RealTimeView from './counter/RealTimeView'
import Showhide from './counter/Showhide'
import Calc from './counter/Calc'
import Todo from './counter/Todo'
import Quote from './counter/Quote'
import Products from './counter/products/Products'
import Parent from './counter/liftstates/Parent'
import ParentContext from './counter/contextAPI/ParentContext'
import FormValidataion from './counter/formvalidataion/FormValidataion'
import ProductSearch from './counter/productSearch/ProductSearch'
import Cart from './counter/productSearch/Cart'
import WithoutMain from './counter/withoutparentpassvalue/WithoutMain'
import CompTwo from './counter/withoutparentpassvalue/CompTwo'
import { MessageProvider } from './counter/contextAPI/ContextTwo/MessageContext'
import Sender from './counter/contextAPI/ContextTwo/Sender'
import Receiver from './counter/contextAPI/ContextTwo/Receiver'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './counter/Routing/Home'
import About from './counter/Routing/About'
import ProductDescription from './counter/productSearch/ProductDescription'
import CartComp from './counter/ecommerse/CartComp'
import FilterComp from './counter/ecommerse/FilterComp'
import EProducts from './counter/ecommerse/EProducts'


function App() {


  return (
    <>
    {/* <EnterTaskFun /> */}
    {/* <ParentComponent /> */}
    {/* <Comp1 /> */}
    {/* <Counter /> */}
    {/* <RealTimeView /> */}
    {/* <Showhide /> */}
    {/* <Calc /> */}
    {/* <Todo /> */}
    {/* <Quote /> */}
    {/* <ParentComponent /> */}
    {/* <Products /> */}
    {/* <Parent /> */}
    {/* <ParentContext /> */}
    {/* <FormValidataion /> */}
    {/* <ProductSearch /> */}
    {/* <ProductDescription /> */}
    {/* <Cart /> */}
    {/* <WithoutMain /> */}
    {/* <CompTwo /> */}

    {/* <MessageProvider>
      <Sender />
      <Receiver />
    </MessageProvider> */}
    <CartComp />
    <FilterComp />
    <EProducts />

    
    </>
  )
}

export default App
