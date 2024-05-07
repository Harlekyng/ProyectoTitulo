import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import TransactionList from './components/transactions/TransactionList';
import TransactionForm from './components/transactions/TransactionForm';
import GoalList from './components/goals/GoalList';
import GoalForm from './components/goals/GoalForm';
import BudgetList from './components/budgets/BudgetList';
import BudgetForm from './components/budgets/BudgetForm';
import CategoryList from './components/categories/CategoryList';
import CategoryForm from './components/categories/CategoryForm';
import AlertList from './components/alerts/AlertList';
import AlertForm from './components/alerts/AlertForm';
import UserProfile from './components/settings/UserProfile';
import UserSettings from './components/settings/UserSettings';
import AdminPanel from './components/settings/AdminPanel';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionList />} />
        <Route path="/transaction/:id" element={<TransactionForm />} />
        <Route path="/goals" element={<GoalList />} />
        <Route path="/goal/:id" element={<GoalForm />} />
        <Route path="/budgets" element={<BudgetList />} />
        <Route path="/budget/:id" element={<BudgetForm />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/category/:id" element={<CategoryForm />} />
        <Route path="/alerts" element={<AlertList />} />
        <Route path="/alert/:id" element={<AlertForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
