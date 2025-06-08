import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const page = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#F2F4F5] h-[72px] pt-[26px]">
        <Container>
          <div className="flex gap-2 items-center">
            <LiaHomeSolid width={20} height={20} className="text-[#5F6C72]" />
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-[#5F6C72] text-sm leading-5 font-normal">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components" className="text-[#5F6C72] text-sm leading-5 font-normal">
                      Shop
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-[#5F6C72] text-sm leading-5 font-normal">Shop Grid</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#2DA5F3] text-sm leading-5 font-medium" >Electronic Devices</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default page;
