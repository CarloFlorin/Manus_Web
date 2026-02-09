/* Design: Terminal Brutalism - Main app with sidebar layout */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import MobileSidebar from "./components/MobileSidebar";
import Home from "./pages/Home";
import Einfuehrung from "./pages/Einfuehrung";
import Linux from "./pages/Linux";
import Git from "./pages/Git";
import Netzwerk from "./pages/Netzwerk";
import Scripting from "./pages/Scripting";
import CICD from "./pages/CICD";
import Docker from "./pages/Docker";
import Kubernetes from "./pages/Kubernetes";
import IaC from "./pages/IaC";
import Cloud from "./pages/Cloud";
import Monitoring from "./pages/Monitoring";
import Projekte from "./pages/Projekte";
import Ressourcen from "./pages/Ressourcen";

function Router() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <MobileSidebar />
      <main className="flex-1 p-4 pt-20 lg:pt-8 lg:ml-72 lg:p-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/einfuehrung" component={Einfuehrung} />
          <Route path="/linux" component={Linux} />
          <Route path="/git" component={Git} />
          <Route path="/netzwerk" component={Netzwerk} />
          <Route path="/scripting" component={Scripting} />
          <Route path="/cicd" component={CICD} />
          <Route path="/docker" component={Docker} />
          <Route path="/kubernetes" component={Kubernetes} />
          <Route path="/iac" component={IaC} />
          <Route path="/cloud" component={Cloud} />
          <Route path="/monitoring" component={Monitoring} />
          <Route path="/projekte" component={Projekte} />
          <Route path="/ressourcen" component={Ressourcen} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
