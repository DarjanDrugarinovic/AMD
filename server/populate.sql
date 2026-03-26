-- Clear existing data
DELETE FROM statistics;
DELETE FROM firmwares;
DELETE FROM products;
DELETE FROM todos;
DELETE FROM sqlite_sequence WHERE name IN ('statistics', 'firmwares', 'products', 'todos');

-- Products
INSERT INTO products (name, family, category, socket, release_date, status) VALUES
('Ryzen 9 7950X',  'Ryzen 7000', 'CPU', 'AM5', '2022-09-27', 'active'),
('Ryzen 9 7900X',  'Ryzen 7000', 'CPU', 'AM5', '2022-09-27', 'active'),
('Ryzen 7 7700X',  'Ryzen 7000', 'CPU', 'AM5', '2022-09-27', 'active'),
('Ryzen 5 7600X',  'Ryzen 7000', 'CPU', 'AM5', '2022-09-27', 'active'),
('Ryzen 9 5950X',  'Ryzen 5000', 'CPU', 'AM4', '2020-11-05', 'discontinued'),
('Ryzen 7 5800X',  'Ryzen 5000', 'CPU', 'AM4', '2020-11-05', 'discontinued'),
('Ryzen 5 5600X',  'Ryzen 5000', 'CPU', 'AM4', '2020-11-05', 'discontinued'),
('RX 7900 XTX',   'RDNA 3',     'GPU', 'PCIe 4.0', '2022-12-13', 'active'),
('RX 7800 XT',    'RDNA 3',     'GPU', 'PCIe 4.0', '2023-09-06', 'active'),
('RX 7600',       'RDNA 3',     'GPU', 'PCIe 4.0', '2023-05-24', 'active'),
('Ryzen 7 7730U', 'Ryzen 7000', 'APU', 'FP7',  '2022-08-29', 'active'),
('Ryzen 5 7530U', 'Ryzen 7000', 'APU', 'FP7',  '2022-08-29', 'active'),
('Ryzen 9 8945HS', 'Ryzen 8000', 'APU', 'FP8', '2024-01-08', 'active'),
('Ryzen 7 8845HS', 'Ryzen 8000', 'APU', 'FP8', '2024-01-08', 'active'),
('Ryzen 5 8645HS', 'Ryzen 8000', 'APU', 'FP8', '2024-06-01', 'upcoming');

-- Firmwares (product_id references the INSERT order above: 1=7950X, 8=RX7900XTX, etc.)
INSERT INTO firmwares (product_id, version, release_date, type, status, changelog) VALUES
-- Ryzen 9 7950X (id=1)
(1, '1.0.0.1',  '2022-10-01', 'microcode', 'deprecated', 'Initial microcode release.'),
(1, '1.0.0.3',  '2023-01-15', 'microcode', 'stable',     'Stability and security improvements.'),
(1, '2.0.0.1',  '2023-06-10', 'BIOS',      'stable',     'AGESA 1.0.0.7b — improved memory compatibility.'),
(1, '2.1.0.0',  '2024-01-20', 'BIOS',      'stable',     'AGESA 1.1.0.0 — Ryzen AI support.'),
-- Ryzen 9 7900X (id=2)
(2, '1.0.0.1',  '2022-10-01', 'microcode', 'deprecated', 'Initial microcode release.'),
(2, '1.0.0.3',  '2023-01-15', 'microcode', 'stable',     'Stability and security improvements.'),
(2, '2.0.0.1',  '2023-06-10', 'BIOS',      'stable',     'AGESA 1.0.0.7b — improved memory compatibility.'),
-- Ryzen 7 7700X (id=3)
(3, '1.0.0.1',  '2022-10-01', 'microcode', 'deprecated', 'Initial microcode release.'),
(3, '2.0.0.1',  '2023-06-10', 'BIOS',      'stable',     'AGESA 1.0.0.7b — improved memory compatibility.'),
-- Ryzen 5 7600X (id=4)
(4, '1.0.0.1',  '2022-10-01', 'microcode', 'deprecated', 'Initial microcode release.'),
(4, '2.0.0.1',  '2023-06-10', 'BIOS',      'stable',     'AGESA 1.0.0.7b — improved memory compatibility.'),
-- Ryzen 5000 series (ids 5-7)
(5, '1.2.0.0',  '2021-03-08', 'microcode', 'deprecated', 'Spectre/Meltdown mitigations.'),
(5, '1.2.0.6',  '2021-08-21', 'microcode', 'stable',     'AGESA 1.2.0.6 — stability fix.'),
(6, '1.2.0.6',  '2021-08-21', 'microcode', 'stable',     'AGESA 1.2.0.6 — stability fix.'),
(7, '1.2.0.6',  '2021-08-21', 'microcode', 'stable',     'AGESA 1.2.0.6 — stability fix.'),
-- RX 7900 XTX (id=8)
(8, '23.1.1',   '2023-01-11', 'driver',    'deprecated', 'Launch driver.'),
(8, '23.7.2',   '2023-07-18', 'driver',    'deprecated', 'Performance improvements for DX12.'),
(8, '24.1.1',   '2024-01-15', 'driver',    'stable',     'Fluid Motion Frames support.'),
(8, '24.3.1',   '2024-03-20', 'driver',    'beta',       'Experimental Vulkan Ray Tracing optimisations.'),
-- RX 7800 XT (id=9)
(9, '23.9.1',   '2023-09-06', 'driver',    'deprecated', 'Launch driver.'),
(9, '24.1.1',   '2024-01-15', 'driver',    'stable',     'Fluid Motion Frames support.'),
-- RX 7600 (id=10)
(10, '23.5.2',  '2023-05-24', 'driver',    'deprecated', 'Launch driver.'),
(10, '24.1.1',  '2024-01-15', 'driver',    'stable',     'Fluid Motion Frames support.'),
-- APU 7730U / 7530U (ids 11-12)
(11, '1.0.0.2', '2022-09-01', 'microcode', 'stable',     'Initial release.'),
(12, '1.0.0.2', '2022-09-01', 'microcode', 'stable',     'Initial release.'),
-- Ryzen 8000 (ids 13-14)
(13, '1.0.0.1', '2024-02-01', 'microcode', 'stable',     'Initial microcode release.'),
(13, '1.1.0.0', '2024-05-01', 'BIOS',      'beta',       'NPU driver optimisations for AI workloads.'),
(14, '1.0.0.1', '2024-02-01', 'microcode', 'stable',     'Initial microcode release.');

-- Statistics
-- firmware_id references match the firmwares inserted above (sequential 1-based ids)
-- Ryzen 9 7950X — firmware id=1 (microcode deprecated), firmware id=2 (microcode stable), firmware id=3 (BIOS stable)
INSERT INTO statistics (product_id, firmware_id, recorded_at, metric, value, unit) VALUES
(1, 1, '2022-10-15 09:00:00', 'power_consumption', 180.2, 'W'),
(1, 1, '2022-10-15 09:00:00', 'temperature',        78.6, '°C'),
(1, 1, '2022-10-15 09:00:00', 'clock_speed',       4950.0, 'MHz'),
(1, 1, '2022-10-15 09:00:00', 'utilization',         82.4, '%'),
(1, 2, '2023-02-10 10:00:00', 'power_consumption', 170.5, 'W'),
(1, 2, '2023-02-10 10:00:00', 'temperature',        72.3, '°C'),
(1, 2, '2023-02-10 10:00:00', 'clock_speed',       5100.0, 'MHz'),
(1, 2, '2023-02-10 10:00:00', 'utilization',         88.0, '%'),
(1, 3, '2023-07-01 14:30:00', 'power_consumption', 165.0, 'W'),
(1, 3, '2023-07-01 14:30:00', 'temperature',        70.1, '°C'),
(1, 3, '2023-07-01 14:30:00', 'clock_speed',       5150.0, 'MHz'),
(1, 3, '2023-07-01 14:30:00', 'utilization',         91.5, '%'),
-- Ryzen 9 7900X — firmware id=7 (BIOS stable)
(2, 7, '2023-07-05 09:00:00', 'power_consumption', 145.2, 'W'),
(2, 7, '2023-07-05 09:00:00', 'temperature',        68.7, '°C'),
(2, 7, '2023-07-05 09:00:00', 'clock_speed',       5000.0, 'MHz'),
(2, 7, '2023-07-05 09:00:00', 'utilization',         85.0, '%'),
-- RX 7900 XTX — firmware id=19 (driver stable)
(8, 19, '2024-02-01 16:00:00', 'power_consumption', 355.0, 'W'),
(8, 19, '2024-02-01 16:00:00', 'temperature',        83.0, '°C'),
(8, 19, '2024-02-01 16:00:00', 'clock_speed',       2500.0, 'MHz'),
(8, 19, '2024-02-01 16:00:00', 'utilization',         97.0, '%'),
-- RX 7800 XT — firmware id=21 (driver stable)
(9, 21, '2024-02-05 11:00:00', 'power_consumption', 263.0, 'W'),
(9, 21, '2024-02-05 11:00:00', 'temperature',        78.5, '°C'),
(9, 21, '2024-02-05 11:00:00', 'clock_speed',       2430.0, 'MHz'),
(9, 21, '2024-02-05 11:00:00', 'utilization',         94.0, '%'),
-- Ryzen 9 8945HS — firmware id=26 (microcode stable)
(13, 26, '2024-03-10 08:00:00', 'power_consumption', 45.0, 'W'),
(13, 26, '2024-03-10 08:00:00', 'temperature',        71.2, '°C'),
(13, 26, '2024-03-10 08:00:00', 'clock_speed',       5200.0, 'MHz'),
(13, 26, '2024-03-10 08:00:00', 'utilization',         76.0, '%');

-- Todos
INSERT INTO todos (title, description, completed, created_at, updated_at) VALUES
('Set up CI/CD pipeline',        'Configure GitHub Actions for automated build and deployment.', false, '2024-01-10 09:00:00', '2024-01-10 09:00:00'),
('Write API documentation',      'Document all REST endpoints using drf-spectacular / Swagger.',  false, '2024-01-12 10:30:00', '2024-01-12 10:30:00'),
('Add JWT authentication',       'Integrate SimpleJWT for token-based auth on protected routes.', false, '2024-01-15 11:00:00', '2024-01-15 11:00:00'),
('Migrate to PostgreSQL',        'Replace SQLite with PostgreSQL for production deployment.',      false, '2024-02-01 08:00:00', '2024-02-01 08:00:00'),
('Implement product filtering',  'Add query param filtering by category, status and socket.',      true,  '2024-02-05 14:00:00', '2024-02-10 16:00:00'),
('Fix CORS configuration',       'Allow requests from the Vite dev server origin.',               true,  '2024-02-08 09:00:00', '2024-02-08 11:00:00'),
('Add pagination to list views', 'Use DRF PageNumberPagination on products and firmwares.',       false, '2024-02-20 10:00:00', '2024-02-20 10:00:00'),
('Write unit tests',             'Cover serializers and views with pytest-django.',                false, '2024-03-01 09:00:00', '2024-03-01 09:00:00');
