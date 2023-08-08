"use client"

import { toast } from "react-hot-toast";
import { Copy, Server } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "./button";

interface ApiAlertProps {
    title: string,
    description: string,
    variant: "public" | "admin",
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant = "public",
}) => {
    const onCopy = () => { 
        navigator.clipboard.writeText(description);
        toast.success("API Route copied to clipboard");
    };
    return (
        <Alert>
            <Server className="h-4 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
                {title}
                <Badge variant={variantMap[variant]}>
                    {textMap[variant]}
                </Badge>
            </AlertTitle>
            <AlertDescription className="mt-4 flex item-center justify-between">
                <code className="relative flex items-center rounded bg-muted px-2 py-1 font-mono text-sm font-semibold">
                    {description}
                </code>
                <Button variant="outline" size="icon" onClick={onCopy}>
                    <Copy className="h-4 w-4" />
                </Button>
            </AlertDescription>
        </Alert>
    )
}

