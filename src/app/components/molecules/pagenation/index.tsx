"use client";
import React, { useState } from "react";
import Text from "../../atoms/typography/text/text";
import { Button } from "../../atoms/button";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import IconButton from "../../atoms/icon-button";
import clsx from "clsx";

interface IPaginationProps {
  totalPerPage: number;
  totalShowing: number;
  totalItems: number;
  currentPage: number;
  handleCurrentPage: (val: number) => void;
}
const Pagenation = ({
  totalPerPage,
  totalItems,
  totalShowing,
  currentPage,
  handleCurrentPage,
}: IPaginationProps) => {
  const pages = totalItems / totalPerPage;
  const pageList = Array(pages);

  const handleNext = () => {
    if (currentPage >= pages - 1) return;

    handleCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage <= 1) return;

    handleCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination-wrapper">
      <Text text={`${totalShowing} of ${totalItems}`} otherClasses="text-sm" />
      <div>
        <Button
          onClick={handlePrev}
          iconBefore={<BiCaretLeft />}
          otherClasses="border-none p-0"
        >
          Prev
        </Button>
        {pageList.map((_p, idx) => (
          <IconButton
            otherClasses={clsx("p-3 bg-transparent", {
              "bg-grey-2": currentPage === idx + 1,
            })}
            key={`page-${idx}-key`}
          >
            {idx + 1}
          </IconButton>
        ))}
        <Button
          onClick={handleNext}
          iconBefore={<BiCaretRight />}
          otherClasses="border-none p-0"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagenation;
