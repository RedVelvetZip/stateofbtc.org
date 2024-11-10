"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { VersionSwitcher } from "@/components/version-switcher";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarTrigger,
	SidebarFooter,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "./ui/breadcrumb";
import { useParams, usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { Button } from "./ui/button";
import survey from "@/surveys/bitcoin/2024";
import { currentSurveysMetadata } from "@/surveys";
import ThemeToggle from "./theme-toggle";

type NavItem = {
	title: string;
	defaultOpen: boolean;
	items: {
		title: string;
		url: string;
	}[];
};

function findBreadcrumbPath(
	navItems: NavItem[],
	pathname: string,
): { parent: string; current: string } | null {
	for (const parent of navItems) {
		// Check if any child item's URL matches the current pathname
		const matchingItem = parent.items?.find((item) => item.url === pathname);
		if (matchingItem) {
			return {
				parent: parent.title,
				current: matchingItem.title,
			};
		}
	}
	return null;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();
	const params = useParams();

	const data = {
		versions: [...currentSurveysMetadata],
		navMain: [
			{
				title: "General",
				defaultOpen: true,
				items: [
					{
						title: "Home",
						url: `/${params.surveyId}`,
					},
					{
						title: "About",
						url: `/${params.surveyId}/about`,
					},
				],
			},
			{
				title: "Survey Sections",
				defaultOpen: true,
				items: [
					...survey.sections.map((section, index) => ({
						title: `${index + 1}) ${section.title}`,
						url: `/${params.surveyId}/${section.id}`,
					})),
					{
						title: "Review",
						url: `/${params.surveyId}/review`,
					},
				],
			},
		] as NavItem[],
	};

	const breadcrumbInfo = findBreadcrumbPath(data.navMain, pathname);

	return (
		<>
			<Sidebar {...props}>
				<SidebarHeader className="border-b -mt-px">
					<VersionSwitcher
						versions={data.versions}
						defaultVersion={data.versions[0]}
					/>
					{/* <SearchForm /> */}
				</SidebarHeader>
				<SidebarContent className="gap-0">
					{data.navMain.map((item) => (
						<Collapsible
							key={item.title}
							title={item.title}
							defaultOpen={item.defaultOpen}
							className="group/collapsible"
						>
							<SidebarGroup>
								<SidebarGroupLabel
									asChild
									className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
								>
									<CollapsibleTrigger>
										{item.title}{" "}
										<ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
									</CollapsibleTrigger>
								</SidebarGroupLabel>
								<CollapsibleContent>
									<SidebarGroupContent>
										<SidebarMenu>
											{item.items.map((item) => (
												<SidebarMenuItem key={item.title}>
													<SidebarMenuButton
														asChild
														isActive={item.url === pathname}
													>
														<Link href={item.url}>{item.title}</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
											))}
										</SidebarMenu>
									</SidebarGroupContent>
								</CollapsibleContent>
							</SidebarGroup>
						</Collapsible>
					))}
				</SidebarContent>
				<SidebarRail />
				<SidebarFooter className="flex flex-row justify-between items-end border-t">
					<ThemeToggle />
					<div>
						<Button variant="outline" size="icon" asChild>
							<Link href="https://x.com/bolander72" target="_blank">
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-primary"
								>
									<title>X</title>
									<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
								</svg>
							</Link>
						</Button>
						<Button variant="outline" size="icon" asChild>
							<Link
								href="https://github.com/bolander72/stateofbtc.org"
								target="_blank"
							>
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-primary"
								>
									<title>GitHub</title>
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
							</Link>
						</Button>
					</div>
				</SidebarFooter>
			</Sidebar>
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b sticky top-0 bg-background z-50">
					<div className="flex items-center gap-2 px-3">
						<SidebarTrigger />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								{breadcrumbInfo && (
									<>
										<BreadcrumbItem className="block">
											{breadcrumbInfo.parent}
										</BreadcrumbItem>
										<BreadcrumbSeparator className="block" />
										<BreadcrumbItem>
											<BreadcrumbPage>{breadcrumbInfo.current}</BreadcrumbPage>
										</BreadcrumbItem>
									</>
								)}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				{props.children}
			</SidebarInset>
		</>
	);
}
