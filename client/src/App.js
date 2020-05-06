import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import Header from './Home/components/Header';
import Footer from './Home/components/Footer';

import Layout from './components/Layout/Layout';

import Home from './Home/views/Home/Home';
import StructuredFinance from './Home/views/StructuredFinance/StructuredFinance';
import FinancialServices from './Home/views/FinancialServices/FinancialServices';
import ConsultingServices from './Home/views/ConsultingServices/ConsultingServices';
import MutualFunds from './Home/views/MutualFunds/MutualFunds';
import PortfolioManagement from './Home/views/PortfolioManagement/PortfolioManagement';
import ContactUs from './Home/views/ContactUs/ContactUs'; 
import Faq from './Home/views/Faq/Faq'; 
import Forex from './Home/views/Forex/Forex'; 
import SignUp from './Home/views/SignUp/SignUp'; 
import Testimony from './Home/views/Testimony/Testimony';
import Crypto from './Home/views/Crypto/Crypto';
import Retirement from './Home/views/Retirement/Retirement';
import Login from './Home/views/SignIn/SignIn';
import Team from './Home/views/Team/Team';
import OurPhilosophy from './Home/views/OurPhilosophy/OurPhilosophy';
import InvestmentApproach from './Home/views/InvestmentApproach/InvestmentApproach';
import InvestmentProcess from './Home/views/InvestmentProcess/InvestmentProcess';
import Vision from './Home/views/Vision/Vision';
import Terms from './Home/views/Terms/Terms';
import PrivacyPolicy from './Home/views/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route path = "/" exact component= {Home} />
        <Route path = "/structured-finance" exact component= {StructuredFinance} />
        <Route path = "/financial-services" exact component= {FinancialServices} />
        <Route path = "/consulting-services" exact component= {ConsultingServices} />
        <Route path = "/mutual-funds" exact component= {MutualFunds} />
        <Route path = "/portfolio-management" exact component= {PortfolioManagement} />
        <Route path = "/login" exact component= {Login} />
        <Route path = "/cryptocurrency" exact component = {Crypto} />
        <Route path = "/contact-us" exact component = {ContactUs} />
        <Route path = "/faq" exact component = {Faq} />
        <Route path = "/forex" exact component = {Forex} />
        <Route path = "/register" exact render={(props) => <SignUp {...props} />} />
        <Route path = "/testimonials" exact component = {Testimony} />
        <Route path = "/retirement" exact component = {Retirement} />
        <Route path = "/our-team" exact component = {Team} />
        <Route path = "/our-philosophy" exact component = {OurPhilosophy} />
        <Route path = "/investment-approach" exact component = {InvestmentApproach} />
        <Route path = "/investment-process" exact component = {InvestmentProcess} />
        <Route path = "/our-vision" exact component = {Vision} />
        <Route path = "/terms-conditions" exact component = {Terms} />
        <Route path = "/privacy-policy" exact component = {PrivacyPolicy} />
        <Route path = "/dashboard" children={props => <Layout {...props}/>}/>
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;