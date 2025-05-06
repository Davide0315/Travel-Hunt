
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookingConfirmation from "./pages/BookingConfirmation";
import Landing from "./pages/Landing";
import Destinations from "./pages/Destinations";
import MyMissions from "./pages/MyMissions";
import MissionDetail from "./pages/MissionDetail";
import Rewards from "./pages/Rewards";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/landing/:id" element={<Landing />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/my-missions" element={<MyMissions />} />
          <Route path="/my-missions/:destinationId" element={<MyMissions />} />
          <Route path="/mission/:id" element={<MissionDetail />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
