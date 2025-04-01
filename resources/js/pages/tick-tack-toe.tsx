import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tick Tack Toe',
        href: '/tick-tack-toe',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tick Tack Toe" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 border-2">
                <div className='flex justify-between gap-4 p-4 h-100'>
                    <div className='flex-[1] h-full rounded-lg'>
                        <img
                            src="/image/silver-tip.png"
                            alt="Tree stage visualization"
                            className="w-full h-full border-gray-500 rounded-lg object-cover"
                        />
                    </div>
                    <div className='flex-[1.5] h-full p-4'>
                        <h2 className='text-4xl font-bold'>Silver Tip</h2>
                        <span className=''>The first visible sign of growth in spring, when the buds show a silvery color at the tip.</span>
                    </div>
                    <div className='flex-[1] flex flex-col gap-2 h-full items-end   '>
                        <Select defaultValue='2025'>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2023">2023</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue='silver-tip'>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Tree Stage" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="silver-tip">Silver Tip</SelectItem>
                                <SelectItem value="green-tip">Green Tip</SelectItem>
                                <SelectItem value="fruit-development">Fruit Development</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
{/* 
    Want To create A Card Component In React JS Wiht Shadcn UI Such That. 
    * It Has A Title. 
    * It Has A Description.
    * It Has A Image It can Be Single Image, If an Array Passed then It Should be Displayed As Corusel And if no image Given then No Image should get Displayed.
    * 

*/}
            <div className='h-screen overflow-hidden border-3'>
                    <Tabs defaultValue="disease" className="w-full">
                        <TabsList className="grid grid-cols-2">
                            <TabsTrigger value="disease">Disease</TabsTrigger>
                            <TabsTrigger value="pests">Insects & Pests</TabsTrigger>
                        </TabsList>
                        <TabsContent value="disease" className='w-full flex flex-col gap-3'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Scab</CardTitle>
                                    <CardDescription>
                                        Apple Scab is a fungal disease caused by Venturia inaequalis that primarily affects apple trees, leading to dark, scaly lesions on leaves, fruit, and twigs. It thrives in cool, wet conditions, spreading rapidly in spring and early summer.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <Table>
                                        <TableCaption>A List of Sprays</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name Of Chemical</TableHead>
                                                <TableHead>Quantity of Chemical for 200 L of Water</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Captan*</TableCell>
                                                <TableCell>600gm</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Dodine</TableCell>
                                                <TableCell>200gm</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Ziram*</TableCell>
                                                <TableCell>600 (ml/gm)</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Scab/powdery mildew</CardTitle>
                                    <CardDescription>
                                    Both Apple Scab and Powdery Mildew are fungal diseases that affect apple trees, causing damage to leaves, fruit, and overall tree health.
                                    </CardDescription>
                                
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <Table>
                                        <TableCaption>A List of Sprays</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name Of Chemical</TableHead>
                                                <TableHead>Quantity of Chemical for 200 L of Water</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Fluxapyroxad 75g/l + Difenoconozole 50 g/l SC</TableCell>
                                                <TableCell>60 ml</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="pests">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>
                                        Change your password here. After saving, you'll be logged out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="current">Current password</Label>
                                        <Input id="current" type="password" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="new">New password</Label>
                                        <Input id="new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </AppLayout>
    );
}
