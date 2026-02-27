import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CTASection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Grazie per la tua richiesta! Ti contatteremo presto.");
    setName("");
    setEmail("");
  };

  return null;





















































};

export default CTASection;