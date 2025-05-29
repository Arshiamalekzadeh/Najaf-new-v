import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FilterRemove, SearchNormal } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { AccommodationStatus, BookStatus, StayStatus } from "../enums";
import { useCity } from "../hooks/useCity";
import { useProvince } from "../hooks/useProvince";

const FilterComponent = ({ onSubmit, fetchTypes, config, statusType }) => {
  const [filters, setFilters] = useState({
    TypeId: "",
    Status: "",
    ProvinceId: "",
    CityId: "",
    Query: "",
  });
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [showFilterIcon, setShowFilterIcon] = useState(false);
  const { dataProvince, isLoadingProvince } = useProvince(0, 41);
  const {
    dataCity,
    isLoadingCity,
    refetch: refetchCity,
  } = useCity(filters?.ProvinceId);
  const { dataTypes, isLoadingTypes } = fetchTypes(skip, take);
  const getStatusOptions = () => {
    switch (statusType) {
      case "BookStatus":
        return Object.keys(BookStatus).map((key) => ({
          value: key,
          label: BookStatus[key],
        }));
      case "StayStatus":
        return Object.keys(StayStatus).map((key) => ({
          value: key,
          label: StayStatus[key],
        }));
      case "AccommodationStatus":
        return Object.keys(AccommodationStatus).map((key) => ({
          value: key,
          label: AccommodationStatus[key],
        }));
      default:
        return [];
    }
  };

  useEffect(() => {
    if (filters?.ProvinceId) {
      refetchCity();
    }
  }, [filters?.ProvinceId, refetchCity]);

  const handleSearch = () => {
    onSubmit(filters);
    setShowFilterIcon(true);
  };

  const handleFilterIconClick = () => {
    setFilters({
      TypeId: "",
      Status: "",
      ProvinceId: "",
      CityId: "",
      Query: "",
    });
    setShowFilterIcon(false);
    onSubmit({
      TypeId: "",
      Status: "",
      ProvinceId: "",
      CityId: "",
      Query: "",
    });
  };

  return (
    <Grid container spacing={2.5} className="flex mb-2 items-center">
      {/* Accommodation Type */}
      {config?.type?.visible && (
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="TypeId">
              {config?.type?.label || "نوع اقامتگاه"}
            </InputLabel>
            <Select
              labelId="TypeId"
              id="TypeId"
              name="TypeId"
              size="small"
              label={config?.type?.label || "نوع اقامتگاه"}
              value={filters.TypeId}
              onChange={(e) =>
                setFilters({ ...filters, TypeId: e.target.value })
              }
            >
              {isLoadingTypes && (
                <MenuItem>
                  <CircularProgress size={18} className="ml-2" />
                  <span>کمی صبر کنید...</span>
                </MenuItem>
              )}
              {dataTypes?.items?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}

      {/* Status */}
      {config?.status?.visible && (
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="Status">
              {config?.status?.label || "وضعیت"}
            </InputLabel>
            <Select
              labelId="Status"
              id="Status"
              name="Status"
              size="small"
              label={config?.status?.label || "وضعیت"}
              value={filters.Status}
              onChange={(e) =>
                setFilters({ ...filters, Status: e.target.value })
              }
            >
              {getStatusOptions().map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}

      {/* Province */}
      {config?.province?.visible && (
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="ProvinceIds">
              {config?.province?.label || "استان"}
            </InputLabel>
            <Select
              labelId="ProvinceIds"
              id="ProvinceIds"
              name="ProvinceIds"
              size="small"
              label={config?.province?.label || "استان"}
              value={filters.ProvinceId}
              onChange={(e) =>
                setFilters({ ...filters, ProvinceId: e.target.value })
              }
            >
              {isLoadingProvince && (
                <MenuItem>
                  <CircularProgress size={18} className="ml-2" />
                  <span>کمی صبر کنید...</span>
                </MenuItem>
              )}
              {dataProvince?.items?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}

      {/* City */}
      {config?.city?.visible && (
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="CityId">{config?.city?.label || "شهر"}</InputLabel>
            <Select
              labelId="CityId"
              id="CityId"
              name="CityId"
              size="small"
              label={config?.city?.label || "شهر"}
              value={filters.CityId}
              onChange={(e) =>
                setFilters({ ...filters, CityId: e.target.value })
              }
            >
              {isLoadingCity && (
                <MenuItem>
                  <CircularProgress size={18} className="ml-2" />
                  <span>کمی صبر کنید...</span>
                </MenuItem>
              )}
              {dataCity?.items?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}

      {/* Search Box */}
      {config?.query?.visible && (
        <Grid item xs={12} md={3} className="flex items-center">
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label={config?.query?.label || "جستجو"}
              value={filters.Query}
              onChange={(e) =>
                setFilters({ ...filters, Query: e.target.value })
              }
            />
          </Box>
          <Box className="mr-2 flex gap-2">
            {showFilterIcon && (
              <Button
                color="inherit"
                variant="contained"
                onClick={handleFilterIconClick}
              >
                <FilterRemove />
              </Button>
            )}
            <Button variant="contained" onClick={handleSearch}>
              <SearchNormal />
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default FilterComponent;
