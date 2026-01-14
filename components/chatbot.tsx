"use client";

import { ArrowRightIcon, MessageCircleMoreIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Textarea } from "./ui/textarea";

export default function ChatBot() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "gemini",
      text: "Hello! 👋🏻 Thanks for vising my website. If you would like to know something about me just ask right away!",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [open, setOpen] = useState<boolean>(false);

  const onOpenChange = (open: boolean) => setOpen(open);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isLoading && open) {
      inputRef.current?.focus();
    }
  }, [isLoading, open]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isDisabled) {
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

      if (!res.ok) {
        throw new Error("AI_UNAVAILABLE");
      }

      const data = await res.json();

      const reply =
        data?.reply || "I am sorry I am unable to reply to your message";

      const geminiMessage: Message = { sender: "gemini", text: reply };

      setMessages((prev) => [...prev, geminiMessage]);
    } catch (error) {
      console.error("Chatbot API error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "gemini",
          text: "I apologize, but my AI assistant is currently at its capacity. Please feel free to reach out to me directly or check back later!",
        },
      ]);
      setIsDisabled(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-6 bottom-6.5 z-50">
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button type="button" variant="default" aria-label="open-chatbot">
            <MessageCircleMoreIcon /> Chat with Jordan
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          sideOffset={8}
          className="flex h-150 w-[calc(100vw-32px)] flex-col p-0 sm:w-100"
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
                  <span
                    className={`${isDisabled ? "bg-red-500" : "bg-green-400"} rounded-full p-1`}
                  ></span>
                  <p className="text-sm">{isDisabled ? "Offline" : "Online"}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="close-chatbot"
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

                    <p className="bg-secondary text-secondary-foreground max-w-[80%] rounded-xl p-3 text-sm wrap-anywhere whitespace-pre-wrap">
                      {message.text}
                    </p>
                  </div>
                );
              }

              return (
                <div key={i} className="flex justify-end">
                  <p className="bg-primary text-primary-foreground max-w-[80%] rounded-xl p-3 text-sm wrap-anywhere whitespace-pre-wrap">
                    {message.text}
                  </p>
                </div>
              );
            })}
            <div ref={chatEndRef}>{isLoading && <p>Thinking...</p>}</div>
          </div>

          <hr />

          <form
            className="flex w-full items-center gap-2 p-3"
            onSubmit={sendMessage}
          >
            <Textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="max-h-14 min-h-5 resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e);
                }
              }}
              autoFocus
              disabled={isLoading || isDisabled}
            />

            <Button
              type="submit"
              variant="default"
              aria-label="send"
              disabled={isLoading || isDisabled}
            >
              {isLoading ? "..." : <ArrowRightIcon />}
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
