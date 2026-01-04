"use client";

import { ArrowRightIcon, MessageCircleMoreIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function ChatBot() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "gemini",
      text: "Hello! 👋🏻 Thanks for vising my website. If you would like to know something about me just ask right away!",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);

  const onOpenChange = (open: boolean) => setOpen(open);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      console.log("res ", res);

      const data = await res.json();

      console.log("data ", data);

      const reply =
        data?.reply || "I am sorry I am unable to reply to your message";

      const geminiMessage: Message = { sender: "gemini", text: reply };

      setMessages((prev) => [...prev, geminiMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error("ChatBot Error: ", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-6 bottom-6.5 z-50">
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button type="button" variant="default" aria-label="open-chat-bot">
            <MessageCircleMoreIcon /> Chat with Jordan
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          sideOffset={8}
          className="flex h-120 w-80 flex-col p-0"
        >
          <div className="flex items-center justify-between gap-2 p-3">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/jordan-faciol.webp"
                alt="Jordan Faciol"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold">Chat with Jordan</p>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-green-400 p-1"></span>
                  <p className="text-sm">Online</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="close-chat-bot"
              onClick={() => onOpenChange(false)}
            >
              <XIcon />
            </button>
          </div>

          <hr />

          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-3">
            {messages.map((message, i) => {
              if (message.sender === "gemini") {
                return (
                  <div key={i} className="flex flex-col justify-start gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/jordan-faciol.webp"
                        alt="Jordan Faciol"
                        width={28}
                        height={28}
                        className="h-7 w-7 rounded-full object-cover"
                        loading="lazy"
                      />
                      <p className="text-sm">Jordan Faciol</p>
                    </div>

                    <p className="bg-secondary text-secondary-foreground max-w-[70%] rounded-xl p-3 wrap-break-word">
                      {message.text}
                    </p>
                  </div>
                );
              }

              return (
                <div key={i} className="flex justify-end">
                  <p className="bg-primary text-primary-foreground max-w-[70%] rounded-xl p-3 wrap-break-word">
                    {message.text}
                  </p>
                </div>
              );
            })}
            <div ref={chatEndRef}>{isLoading && <p>Thinking...</p>}</div>
          </div>

          <hr />

          <form className="flex items-center gap-2 p-3" onSubmit={sendMessage}>
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <Button
              type="submit"
              variant="default"
              aria-label="send"
              disabled={isLoading}
            >
              {isLoading ? "..." : <ArrowRightIcon />}
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
