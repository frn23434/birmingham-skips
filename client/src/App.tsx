import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Tettenhall from "@/pages/tettenhall";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/skip-hire-in-tettenhall" component={Tettenhall} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  );
}

export default App;
